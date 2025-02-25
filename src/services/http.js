import axios from "axios";
import swal from "sweetalert2";

// Função para criar instâncias da API
const createInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response, config } = error;
      if (!response) return Promise.reject(error);

      const { status } = response;
      const { _retry } = config;

      if (status === 409 && !_retry) {
        let isInterceptorExecuted = false;

        if (!isInterceptorExecuted) {
          isInterceptorExecuted = true;

          let countdown = localStorage.getItem("countdown") || 10; // Recupera o valor do contador do armazenamento local

          function updateCountdownButton() {
            if (countdown >= 0) {
              const okButton = document.querySelector(".swal2-confirm");
              if (okButton) {
                okButton.textContent = `Ok (${countdown})`; // Atualiza o texto do botão "Ok"
              }
            }
          }

          // Atualiza o botão do modal quando ele é exibido
          document.addEventListener("DOMContentLoaded", () => {
            updateCountdownButton();
          });

          swal({
            title: "Atenção!",
            text: "Você está sendo deslogado, pois seu login está sendo usado em outro navegador.",
            icon: "warning",
            confirmButtonText: `Ok (${countdown})`, // Exibe o contador de tempo restante
            allowOutsideClick: false,
            buttonsStyling: false,
            showCancelButton: false, // Oculta o botão de cancelamento
            timer: countdown * 1000, // Define um temporizador para fechar automaticamente após a contagem regressiva
          }).then(() => logout());

          // Configura a contagem regressiva
          const countdownInterval = setInterval(() => {
            countdown--;
            localStorage.setItem("countdown", countdown); // Salva o valor do contador no armazenamento local
            updateCountdownButton(); // Atualiza o botão "Ok"
            if (countdown === 0) {
              clearInterval(countdownInterval); // Interrompe a contagem regressiva
            }
          }, 1000);

          // Faz o logout do sistema na contagem após os 10 segundos ou clicando no botão
          const logout = () => {
            localStorage.removeItem("auth-jobb");
            localStorage.removeItem("vuex");
            localStorage.removeItem("countdown");
            window.location.href = "/login";
            // Marca a requisição como já tentada para não fazer o retry
            config._retry = true;
          }
        }
      }

      if (status === 511) {
        localStorage.removeItem("auth-jobb");
        localStorage.removeItem("vuex");
        window.location.href = "/login";
        config._retry = true;
      }

      if (status === 402) {
        window.location.href = "/meuplano";
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

// Criar instâncias separadas para cada API
const api = createInstance(import.meta.env.VITE_API);
const apiV2 = createInstance(import.meta.env.VITE_API_V2);

// Interceptador para adicionar o token de autenticação nas requisições
apiV2.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-jobb"); // Recupera o token do localStorage
    if (token) {
      config.headers.Authorization = `${token}`; // Adiciona o token no cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptador para adicionar o token de autenticação nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-jobb"); // Recupera o token do localStorage
    if (token) {
      config.headers.Authorization = `${token}`; // Adiciona o token no cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Função global $api
const $api = (token) => {
  let headers = {
    "Content-type": "application/json",
  };

  if (token) {
    Object.assign(headers, { Authorization: `${token}` });
  }

  return api;
};

export { api, apiV2, $api };

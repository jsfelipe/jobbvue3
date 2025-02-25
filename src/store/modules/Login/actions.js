import { api, apiV2, $api } from "@/services/http";

const doLogin = async ({ commit }, params) => {
  try {
    const response = await api.post("/auth/login", {
      dominio: params.dominio,
      login: params.login,
      senha: params.senha,
      web: true,
    });

    if (!response.data) throw response;

    localStorage.setItem("auth-jobb", response.data.access_key);
    api.defaults.headers.common["Authorization"] = response.data.access_key;

    const { access_key, ...result } = response.data;
    localStorage.setItem("pagamentoValido", result.pagamentoValido);
    localStorage.setItem("data_bloqueio", result.data_bloqueio);

    commit("SET_LOGIN", access_key);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const sessionUser = async () => {
  try {
    const response = await apiV2.get("/session");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const doLogout = async ({ commit }) => {
  try {
    localStorage.removeItem("auth-jobb");
    localStorage.removeItem("vuex");
    delete api.defaults.headers.common["Authorization"];

    commit("SET_LOGOUT");
    window.location.href = "/login";
    return Date.now();
  } catch (error) {
    return Promise.reject(error);
  }
};

const me = async ({ commit, state: { token } }) => {
  try {
    const response = await $api(token).get("auth/me");

    commit("SET_DATA", response.data.data);
    commit("SET_CAMPOS_CUSTOMIZADOS", response.data.camposCustomizados);

    return Promise.resolve(response.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};



export default {
  doLogin,
  sessionUser,
  doLogout,
  me
};

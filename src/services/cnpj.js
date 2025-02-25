import axios from "axios";

const getCNPJ = (cnpj) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://comercial.cnpj.ws/cnpj/${cnpj}?token=N6SWZ4adW7rPtb0JAiGMxWM382YT7Y1sSXJ042EJhoOz`)
            .then((resp) => {
                resolve(resp.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {
    get: getCNPJ,
};


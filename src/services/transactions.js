import Vue from "vue";

export default {
  get: id => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/transactions/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  multipleTransactions: (ids) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions/multiple`,ids)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  alterDateTransactions: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions/alterdate`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  save: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  saveRequestPayment: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions/request-payment`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  update: (params, id) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`${process.env.VUE_APP_API_V2}/transactions/${id}`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateTransactConc: (params, id) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`${process.env.VUE_APP_API_V2}/transactions/update-transaction-conc/${id}`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  deleteParcelamentoCartao: id => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .delete(
          `${process.env.VUE_APP_API_V2}/transactions/delete-parcel-card/${id}`
        )
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  inserirTransferencia: (params) => {    
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`lancamentos/inserir-transferencia-antigo`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  removerConciliacao: (params) => {    
    return new Promise((resolve, reject) => {    
      Vue.prototype.$http
        .post(`lancamentos/deletar-conciliacao`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  saveDateConc: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions/config-save-date-conc`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  export: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/transactions/relation-payments-export`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

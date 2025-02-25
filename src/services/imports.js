import Vue from "vue";
export default {
  list: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/list-grupos-custos-import`, {
          params
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  saveGruposCusto: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/update-grupos-custos-import`, {
          params
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  sendCampos: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/import-parse-transactions`, {
          params
        })
        .then(resp => {
          resolve(resp.data);
          console.log(resp);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  sendCamposPersons: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/import-parse-persons`, {
          params
        })
        .then(resp => {
          resolve(resp.data);
          console.log(resp);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  sendCamposEquips: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/import-parse-equips`, {
          params
        })
        .then(resp => {
          resolve(resp.data);
          console.log(resp);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  submitFileGruposCusto: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/import-grupos-custos`, params, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  'getStatusBatchTransactions': async (id) => {       
    let resposta = {};                
    await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/status-batch-transactions/`+id)        
    .then((result) => {                                                                    
        resposta = result;
    }).catch((result) => {
        console.error(result);
    });
    return resposta
},
'getStatusBatchPersons': async (id) => {       
  let resposta = {};                
  await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/status-batch-persons/`+id)        
  .then((result) => {                                                                    
      resposta = result;
  }).catch((result) => {
      console.error(result);
  });
  return resposta
},
'getStatusBatchEquips': async (id) => {       
  let resposta = {};                
  await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/status-batch-equips/`+id)        
  .then((result) => {                                                                    
      resposta = result;
  }).catch((result) => {
      console.error(result);
  });
  return resposta
},
};

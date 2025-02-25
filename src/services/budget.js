import Vue from "vue";

export default {
  getBudget: id => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/show/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateBudget: (id, params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`${process.env.VUE_APP_API_V2}/budget/update/${id}`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getBudgetGroup: id => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/budget-group/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getSubTotalBudget: id => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/sub-total-budget/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getHandsOnTable: (id,showTable) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/handsontable/${showTable}/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateHandsOnTableItem: dataOrca => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/handsontablesave`, dataOrca)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },


  updateHandsOnRow: dataOrca => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/handsontable-move-row`, dataOrca)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
 
  deleteHandsOnTableItem: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(
          `${process.env.VUE_APP_API_V2}/budget/handsontable-delete-itens`,params
        )
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  exportBudget: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/export-budget`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },  

  modifyStatus: (id_orcamento,id_orca_status,excluirItensZerados,approve,dataSendEmail) => { 
    let params = {}
    params.id_orcamento = id_orcamento
    params.id_orca_status = id_orca_status
    params.excluirItensZerados = excluirItensZerados
    params.approve = approve
    params.dataSendEmail = dataSendEmail
  
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/alter-status`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }, 

  getConfigLinkModel: (id_orcamento) => {
    let params = {}
    if(id_orcamento){
      params.id_orcamento = id_orcamento ? id_orcamento: ''
    }    
    return new Promise((resolve, reject) => {
       Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/link-model`,{params})
        .then(resp => {   
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },  
  
  saveConfigLinkModel: params => {
    return new Promise((resolve, reject) => {
       Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/save-config-link-model`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },  

  generateLinkModel: params => {
    return new Promise((resolve, reject) => {
       Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/budget/generate-link-model`, params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },  

  getValueDesired: (params) => {     
    return new Promise((resolve, reject) => {
       Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/desired-value`,{params})
        .then(resp => {   
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },  

};







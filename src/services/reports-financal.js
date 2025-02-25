import Vue from "vue";

export default {

  cashFlowList: params => {
    return new Promise((resolve, reject) => {    
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/budget/report-cash-flow`, { params })
        .then(resp => {     
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  list: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/reports-financial`, { params })
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
        .post(`${process.env.VUE_APP_API_V2}/reports-financial/export`, { params })
        .then(resp => {          
          window.open(resp.data);
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  exportDre: params => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/reports-financial/exportDre`, { params })
        .then(resp => {          
          window.open(resp.data);
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

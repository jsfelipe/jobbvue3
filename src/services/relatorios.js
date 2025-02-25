import Vue from "vue";
export default {
  list: params => {
    return new Promise((resolve, reject) => {   
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/report-budget-period`, { params })
        .then(resp => {
          // console.log(resp.data);
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

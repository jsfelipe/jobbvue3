import Vue from "vue";

export default {
  list: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/task`,{ params })
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  showTaskSub: (id) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .get(`${process.env.VUE_APP_API_V2}/tasks-sub/${id}`)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  createSubTask: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/task/create-sub-task`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  update: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .put(`${process.env.VUE_APP_API_V2}/task/${params.id_projeto_tarefa}`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  createTimeValueBudgetItem: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/task/create-time-value-budget-item`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  destroyTask: (params) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$http
        .post(`${process.env.VUE_APP_API_V2}/task/destroy`,params)
        .then(resp => {
          resolve(resp.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
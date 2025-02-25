import Vue from 'vue';

export default {

    'get': (id) => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/budget/get-commission/${id}`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'save': (params) => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/budget/save-commission`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'update': (id,params) => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/budget/update-commission/${id}`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'delete': (id) => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.delete(`${process.env.VUE_APP_API_V2}/budget/destroy-commission/${id}`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
}
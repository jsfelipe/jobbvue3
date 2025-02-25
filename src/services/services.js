import Vue from 'vue';

export default {
    'list': () => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/services`,)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'save': (params) => {
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/services`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
}
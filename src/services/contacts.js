import Vue from 'vue';

export default {
    'show': (id) => {      
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/contacts/${id}`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    },
}


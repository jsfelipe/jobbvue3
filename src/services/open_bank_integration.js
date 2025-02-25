import Vue from 'vue';

export default {
    'createPayment': (params) => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/bank/create-payment`,params)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    }, 
}
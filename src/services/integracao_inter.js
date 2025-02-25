import Vue from 'vue';

export default {
    'paymentGenerate': (params,id_unidade) => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/inter/generate-payment`,params,{
                headers: {'unidade': id_unidade}
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    }, 
    'showDetailPayment': (nosso_numero_boleto_inter,id_unidade) => {    

        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/inter/show-detail-payment/${nosso_numero_boleto_inter}`,{
                headers: {'unidade': id_unidade}
             })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'generateLinkPayment': (params) => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/transactions/generate-link-payment`,params)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'removeErroInter': (id_lancamento) => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/transactions/remove-error-inter/${id_lancamento}`)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'sendEmailPayment': (params) => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/inter/send-email-payment`,params)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    

}
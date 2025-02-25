import Vue from 'vue';
export default {

  /* ---- CONTA BANCÁRIA
    -----------------------------------------------------------------------------------------*/
    'getAllOptions': async () => { 
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/accounts-banks-select-options`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })       
    },  
    'getAll': async (params) => { 
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/accounts-banks`,{params})
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })       
    },  
    'store': async (params) => {  
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/accounts-banks`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    }, 
    'update': async (params) => {  
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/accounts-banks/${params.id_contaBancaria}`,params)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })
    }, 
    'destroy': async (id_contaBancaria) => {  
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.delete(`${process.env.VUE_APP_API_V2}/accounts-banks/${id_contaBancaria}`)
                .then(resp => {
                    resolve(resp.data)
                }).catch(error => {
                    reject(error)
                })
        })  
    }, 
    'show': async (params) => {  
        let result = {};
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/accountBanks/${params}`)        
        .then(rs => {            
            result = rs.data;
        }).catch(er => {
            console.error(er);
        });
        return result;
    },    

}

import Vue from 'vue';
export default {

    'list': () => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/permissions`,)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'get': (id) => {   
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/permissions/${id}`,)
                .then(resp => {        
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'save': (params) => {  
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/permissions`, params)
                .then(resp => {        
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },

    'update': (id, params) => {  
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/permissions/${id}`, params)
                .then(resp => {        
                    console.log(resp.data)
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },

}
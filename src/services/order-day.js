import Vue from "vue";

export default {
 'List': (id_orcamento) => {     
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/order-day?id_orcamento=${id_orcamento}`,)
         .then(resp => {             
              resolve(resp.data)                
         }).catch(error => {
               reject(error)
         })
     })
 },
 'Create': (params) => {     
  return new Promise((resolve, reject) => {
    Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/order-day`,params)
       .then(resp => {             
            resolve(resp.data)                
       }).catch(error => {
             reject(error)
       })
   })
},
'Show': (id) => {     
  return new Promise((resolve, reject) => {
    Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/order-day/${id}`)
       .then(resp => {             
            resolve(resp.data)                
       }).catch(error => {
             reject(error)
       })
   })
},
'Update': (params) => {     
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/order-day/${params.id}`,params)
           .then(resp => {             
                resolve(resp.data)                
           }).catch(error => {
                 reject(error)
           })
       })
    },

'Destroy': (id) => {        
      return new Promise((resolve, reject) => {
         Vue.prototype.$http.delete(`${process.env.VUE_APP_API_V2}/order-day/${id}`)
            .then(resp => {             
                 resolve(resp.data)                
            }).catch(error => {
                  reject(error)
            })
        })
},
'generateHtml': (uuid) => {     
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/order-day-html?h=${uuid}`)
           .then(resp => {             
                resolve(resp.data)                
           }).catch(error => {
                 reject(error)
           })
       })
    },

'copyOrderDay': (id) => {        
     return new Promise((resolve, reject) => {
        Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/order-day/copy/${id}`)
           .then(resp => {             
                resolve(resp.data)                
           }).catch(error => {
                 reject(error)
           })
       })
 },
}

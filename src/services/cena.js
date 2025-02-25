import Vue from "vue";

export default {
 'List': (id_orcamento) => {     
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/cena?id_order=${id_orcamento}`,)
         .then(resp => {             
              resolve(resp.data)                
         }).catch(error => {
               reject(error)
         })
     })
 },
 'Create': (params) => {     
  return new Promise((resolve, reject) => {
    Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/cena`,params)
       .then(resp => {             
            resolve(resp.data)                
       }).catch(error => {
             reject(error)
       })
   })
},
'Update': (params) => {     
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/cena/${params.id}`,params)
           .then(resp => {             
                resolve(resp.data)                
           }).catch(error => {
                 reject(error)
           })
       })
    },
'Destroy': (id) => {     
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.delete(`${process.env.VUE_APP_API_V2}/cena/${id}`)
          .then(resp => {             
               resolve(resp.data)                
           }).catch(error => {
                reject(error)
           })
       })
    },
 'Copy': (params) => {     
     return new Promise((resolve, reject) => {
       Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/cena/copy`,params)
         .then(resp => {             
              resolve(resp.data)                
          }).catch(error => {
               reject(error)
          })
      })
   },
 'Order': (params) => {     
     return new Promise((resolve, reject) => {
      Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/order-item`,params)
         .then(resp => {             
              resolve(resp.data)                
          }).catch(error => {
               reject(error)
          })
      })
   },
}
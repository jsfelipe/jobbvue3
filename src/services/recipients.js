import Vue from "vue";

export default {
 'List': (id_orcamento) => {     
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/recipients?id_order=${id_orcamento}`,)
         .then(resp => {             
              resolve(resp.data)                
         }).catch(error => {
               reject(error)
         })
     })
 },
 'Send': (params) => {     
  return new Promise((resolve, reject) => {
    Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/recipients/${params.id}`,params)
       .then(resp => {             
            resolve(resp.data)                
       }).catch(error => {
             reject(error)
       })
   })
},
}
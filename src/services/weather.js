import Vue from "vue";

export default {
 'List': (id) => {     
    return new Promise((resolve, reject) => {     
      Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/weather?id_order=${id}`,)
         .then(resp => {             
              resolve(resp.data)                
         }).catch(error => {
               reject(error)
         })
     })
 },
}

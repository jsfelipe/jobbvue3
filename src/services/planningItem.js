import Vue from 'vue';

export default {  
 'updateItem': (params,id_grupoCusto) => {     
   return new Promise((resolve, reject) => {
    Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/planning/item/update/${id_grupoCusto}`,params)
      .then(resp => {             
         resolve(resp.data)                
       }).catch(error => {
         reject(error)
     })
   })
  },

}
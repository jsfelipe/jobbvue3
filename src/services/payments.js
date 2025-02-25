import Vue from "vue";

export default {
 'testIntegrationBank': (params) => {     
    console.log('aqui params',params)
    return new Promise((resolve, reject) => {
      Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/bank/test-integration`,params)
         .then(resp => {             
              resolve(resp.data)                
         }).catch(error => {
               reject(error)
         })
     })
 },
 'createWebHook': (params) => {      
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/bank/create-webhook`,params)
           .then(resp => {             
                resolve(resp.data)                
           }).catch(error => {
                 reject(error)
           })
       })
   },
 'dateCertificate': (certicate) => {    
  return new Promise((resolve, reject) => {
    Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/bank/date-certificate/${certicate}`)
       .then(resp => {             
            resolve(resp.data)                
       }).catch(error => {
             reject(error)
       })
   })
},
}
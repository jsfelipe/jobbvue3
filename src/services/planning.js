import Vue from 'vue';

export default {  
 'get': (params) => {     
  return new Promise((resolve, reject) => {
     Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/planning`)
       .then(resp => {             
          resolve(resp.data)                
        }).catch(error => {
          reject(error)
      })
    })
},
 'create': (params) => {     
  return new Promise((resolve, reject) => {
     Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/planning/create`,params)
       .then(resp => {             
          resolve(resp.data)                
        }).catch(error => {
          reject(error)
      })
    })
 }, 
 'update': (params) => {     
   return new Promise((resolve, reject) => {
    Vue.prototype.$http.put(`${process.env.VUE_APP_API_V2}/planning/update/${params.id}`,params)
      .then(resp => {             
         resolve(resp.data)                
       }).catch(error => {
         reject(error)
     })
   })
  },
  'select': (id) => {     
    return new Promise((resolve, reject) => {
       Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/planning/select/${id}`)
         .then(resp => {             
            resolve(resp.data)                
          }).catch(error => {
            reject(error)
        })
      })
  },
  'lockedUnlocked': (id) => {     
    return new Promise((resolve, reject) => {
       Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/planning/lockedunlocked/${id}`)
         .then(resp => {             
            resolve(resp.data)                
          }).catch(error => {
            reject(error)
        })
      })
   },
  'show': (id) => {     
    return new Promise((resolve, reject) => {
       Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/planning/show/${id}`)
         .then(resp => {             
            resolve(resp.data)                
          }).catch(error => {
            reject(error)
        })
      })
  },

}
import Vue from 'vue';

export default {
    'Connect': () => {     
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/docusign/connect`,)
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'Callback': (params) => {       
        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/docusign/callback`,{
                params
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'listFolders': (id_orcamento) => {       
        return new Promise((resolve, reject) => {
            
            const docusignTokens =  JSON.parse(localStorage.getItem('@docusign'))
         
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/docusign/list-folders/${id_orcamento}`,{
                headers: {'Authorization-token-docusign': docusignTokens.access_token}
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },   
    'listEnvelopes': (params) => {    
                    
        const docusignTokens =  JSON.parse(localStorage.getItem('@docusign'))
        let url = params.id_pessoa ? `${params.id_orcamento}/${params.id_pessoa}` : `${params.id_orcamento}`

        return new Promise((resolve, reject) => {
            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/docusign/list-envelopes/${params.folderId}/${url}`,{
                headers: {'Authorization-token-docusign': docusignTokens.access_token}
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'SendEnvelope': (params) => {              
        return new Promise((resolve, reject) => {
            
            const docusignTokens =  JSON.parse(localStorage.getItem('@docusign'))

            Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/docusign/send-envelope`,params,{             
                headers: {'Authorization-token-docusign': docusignTokens.access_token}
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },
    'ListDocuments': (envelopeId) => {              
        return new Promise((resolve, reject) => {
            
            const docusignTokens =  JSON.parse(localStorage.getItem('@docusign'))

            Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/docusign/list-documents/${envelopeId}`,{             
                headers: {'Authorization-token-docusign': docusignTokens.access_token}
            })
                .then(resp => {             
                    resolve(resp.data)                
                }).catch(error => {
                    reject(error)
                })
        })
    },


}
import Vue from 'vue';
export default {

  /* ---- CONTAS A PAGAR
    -----------------------------------------------------------------------------------------*/
    'listar': async (params) => {
      localStorage.setItem('searchConta-Pagar', JSON.stringify(params))
      params = JSON.parse(localStorage.getItem('searchConta-Pagar'))
        
        let result = {};
        await Vue.prototype.$http.get('/lancamentos/get/listar/contas-pagar/', {params}).then(rs => {
          result = rs.data;
        }).catch(er => {
          console.error(er);
        });
        return result;
    },

    'deletar': async (id) => {
        let params = {id_lancamento: [id]};
        let retorno = {};
        let pathname = window.location.pathname.split("/");
        params.pathname = pathname;
        await Vue.prototype.$http.get('/lancamentos/delete/tipo/conta-pagar/', {params}).then((result) => {
            
            retorno.status = true;
            retorno.msg = result.data.msg;
        }).catch((result) => {
            retorno.status = false;
            retorno.msg = result.data.msg;
        });
        return retorno;
    },

    'destroy': async (id_lancamento,all) => {   

        let retorno = {};   
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/transactions/delete-transaction/${id_lancamento}/${all}`)
        
        .then((result) => {
            
              retorno.status = result.data.status;
              retorno.msg = result.data.msg;
        }).catch((result) => {
            retorno.status = false;
            retorno.msg = result.data.msg;
        });
         
        return retorno;
    },

    'exportar': async (params) => {
        let result = {};
        let moreUrl = '';
        if (params.tipo_exportacao) {
            moreUrl += 'tipo_exportacao/' + params.tipo_exportacao + '/';
        }
        if (params.extensao_arquivo) {
            moreUrl += 'extensao_arquivo/' + params.extensao_arquivo + '/';
        }

        // inserindo na api
        await Vue.prototype.$http.post('/lancamentos/exportar/' + moreUrl, params).then(function (response) {
            result.status = true;
            result.url = response.data;
        }).catch(function (resultado) {
            result.status = false;
            result.msg = (resultado.data) ? resultado.data.msg : 'Error ao exportar';
        });
        return result;
    },

    'listarSolicitacaoPagamento': async (params) => {
        let resposta = {};
        await Vue.prototype.$http.post('/lancamentos/get/listar/solicitacoes-contas-pagar', params).then((result) => {
            resposta = result.data
        }).catch((result) => {
            console.error(result);
        });
        return resposta
    },

    'listarCnab': async (params) => {  
        
        localStorage.setItem('search-Cnab', JSON.stringify(params))   

        console.log(params)

        let result = {};
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/batch-cnab/index?page=${params.currentPage}`, {params})        
        .then(rs => {
            result = rs.data;
        }).catch(er => {
            console.error(er);
        });
        return result;
    },

    'gerarPagamentoCnab': async (params) => {       
        let resposta = {};                
        await Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/batch-cnab`, {params})        
        .then((result) => {                                                                    
            resposta = result;
        }).catch((result) => {
            console.error(result);
        });
        return resposta
    },

    'loteCnab': (params) => {    
        let resposta = {}; 
        
        return new Promise((resolve, reject) => {
             Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/batch-cnab/fileCnab/${params}`)        
            .then((result) => {          
               resolve(result)
            }).catch((error) => {
                reject(error)
                resposta = error   
            });
        })      
    
    },

    'loteCnabBody': async (params) => {    
        let resposta = {};                
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/batch-cnab/fileCnabBody/${params}`)        
        .then(async (result) => {            
            const content = result;               
      
            resposta = {
                'status': 200,
                'content': content.data.result, 
                'fileName': content.data.arquivo_nome 
            };
        }).catch((result) => {
            console.error(result);
        });
        return resposta
    },

    'loteCnabConsult': async (id) => {    
        let resposta = {};                
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/cnab-batch-consult/${id}`)        
        .then(async (result) => {            
            resposta = result.data                  
        }).catch((result) => {
            console.error(result);
        });
        return resposta
    },


    'generateCnabConsult': async (id) => {    
        let resposta = {};              
   
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/cnab-batch-generate/${id}`)        
        .then(async (result) => {            
            resposta = result.data                  
        }).catch((result) => {
            console.error(result);
        });
        return resposta
    },

    'detalhesPessoaParaCnab': async (params) => { 
        let resposta = {};                                    
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/batch-cnab/detailsPersonForCnab/${params}`)        
        .then((result) => {                               
            resposta = result.data;                                                   
        }).catch((result) => {            
            console.error(result);
        });
        return resposta
    },

    'deletarCnab': async (id) => {
        let retorno = {};
        await Vue.prototype.$http.delete(`${process.env.VUE_APP_API_V2}/batch-cnab/delete/${id}`)
        .then((result) => {                                   
            retorno.status = result.status;
            retorno.msg = result.data.msg;           
        }).catch((result) => {
            retorno.status = false;
            retorno.msg = result.data.msg;
        });
        return retorno;
    },

    'getCnabRetorno': async (params) => {
        let retorno = []; 
        await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/cnab-batch-return?page=1`,{params})    
        .then((result) => {            
            retorno = result.data;      
        }).catch((error) => {       
            retorno = error; 
        });   

        return retorno;
    },

    'saveCnabRetorno': async (params) => {
        let retorno = {};
        await Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/save-cnab-batch-return`,params)
        .then((result) => {                
            retorno = result;             
       
        }).catch((error) => {       
            retorno = error; 
        });
        return retorno;
    },
    

}

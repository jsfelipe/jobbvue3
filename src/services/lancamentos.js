import Vue from 'vue';
export default {

  
 'listarConta': async (params) => {
        localStorage.setItem('searchExtratroLancamentos', JSON.stringify(params))
        params = JSON.parse(localStorage.getItem('searchExtratroLancamentos'))
        
        let resposta
        // params.controller = 'lancamento',
        // params.permission = 'listar'
        try{
            resposta = await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/transactions/index`, {params})
        } catch(err) {
             resposta = err
            throw new Error(`Erro na requisição - lançamentos:ListarConta`);
           
        } finally {
            return resposta
        }
        
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

        let url_api = '';    
        if(params.extencao == "pdf"){
            url_api = '/lancamentos/exportar/' + moreUrl;
        }else{            
            url_api = `${process.env.VUE_APP_API_V2}/transactions/export`;
        }
        
        await Vue.prototype.$http.post(url_api, params).then(function (response) {                           
            if(params.extencao == "pdf"){
                result.status = true;                        
                result.url = response.data;              
            }else{
                console.log(response);
                window.open(response.data);
            }                    
        }).catch(function (resultado) {
            result.status = false;
            result.msg = (resultado.data) ? resultado.data.msg : 'Error ao exportar';
        });
        return result;
    },

     'listarContasCartao': async (params) => {
        localStorage.setItem('searchExtratroCartao', JSON.stringify(params))
        params = JSON.parse(localStorage.getItem('searchExtratroCartao'))
        let retorno = {};
        await Vue.prototype.$http.post('/lancamentos/lista-contas-cartao', params).then((result) => {
            retorno = result.data;
        }).catch((error) => {
            retorno = error;
        });
        return retorno;
    },

}

import { api, apiV2} from "@/services/http";
export default {

  'list': (params) => {
    localStorage.setItem('searchPessoas', JSON.stringify(params))
    params.controller = 'Cadastro de pessoa',
    params.permission = 'Consultar'
    return new Promise((resolve, reject) => {
      apiV2.get(`/persons?page=${params.currentPage}`,{params})
        .then(resp => {
          resolve(resp.data.persons)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'get' : (id) => {
     let params = {}
     params.controller = 'Cadastro de pessoa',
     params.permission = 'Consultar'
      return new Promise((resolve, reject) => {
        apiV2.get(`/persons/${id}`,{params})
          .then(resp => {
            resolve(resp.data)
          }).catch(error => {
            reject(error)
          })
      })
  },

  'save' : (params) => {
    params.controller = 'Cadastro de pessoa',
    params.permission = 'salvar'
    return new Promise((resolve, reject) => {
      apiV2.post(`/persons`,params)
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'updatePerson' : (params) => {
    params.controller = 'Cadastro de pessoa',
    params.permission = 'salvar'
    return new Promise((resolve, reject) => {
      apiV2.put(`/persons/${params.id_pessoa}`,params)
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'update' : (params) => {
    params.controller = 'Cadastro de pessoa',
    params.permission = 'salvar'
    return new Promise((resolve, reject) => {
      apiV2.put(`/update-account-bank/${params.id_pessoa}`,params)
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'delete' : (id) => {
    let params = {}
    params.controller = 'Cadastro de pessoa',
    params.permission = 'deletar'
    return new Promise((resolve, reject) => {
      apiV2.delete(`/persons/${id}`,{params})
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'deletAccountBank' : (id) => {
    let params = {}
    params.controller = 'Cadastro de pessoa',
    params.permission = 'deletar'
    return new Promise((resolve, reject) => {
      apiV2.delete(`/delete-account-bank/${id}`,{params})
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'deleteFile' : (id) => {
    return new Promise((resolve, reject) => {
      apiV2.get(`/persons-delete-file/${id}`)
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },

  'getContracts' : (id) => {
    return new Promise((resolve, reject) => {
      apiV2.get(`/persons-contracts/${id}`)
        .then(resp => {
          resolve(resp.data)
        }).catch(error => {
          reject(error)
        })
    })
  },


  'inserir': async(parametro) => {
    let result = {};
    // inserindo na api
    await api.post('/pessoa/post', parametro).then((response) => {
        // console.log('acao 5 fim');
        // adicionando na lista do state
        result.status = true;
        result.msg = response.data.msg;
        result.id_pessoa = response.data.id_pessoa;
    }).catch((response) => {
        result.status = false;
        result.msg = response.data.msg;
    });
    return result;
},



}

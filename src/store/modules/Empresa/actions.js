import { api, apiV2, $api } from '@/services/http'

const listar = async ({ commit }, params) => {
  let qs = ''
  if (params) {
    qs = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')
  }
  let resolve = {}
  await api
    .get('/Empresa/get?' + qs)
    .then(function (response) {
      if (!response.data) throw response

      commit('SET_LIST', response.data.data)
      resolve = response.data
    })
    .catch(function (error) {
      commit('SET_LIST', [])
      resolve = error.data
    })
  return resolve
}

const listarTable = async ({ commit }, params) => {
  let tableEmpresa = window.location.href.indexOf('/unidades')

  if (tableEmpresa != -1) {
    params.table = true
  }

  const qs = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')
  let resolve = {}

  await api
    .get('/Empresa/get?' + qs)
    .then(function (response) {
      if (!response.data) throw response

      commit('SET_LIST_TABLE', response.data.data)
      resolve = response.data
    })
    .catch(function (error) {
      commit('SET_LIST_TABLE', [])
      resolve = error.data
    })
  return resolve
}

const limparListaTable = ({ commit, state }) => {
  commit('SET_LIST_TABLE', [])
}

const limparLista = ({ commit, state }) => {
  commit('SET_LIST', [])
}

const inserir = async ({ commit }, parametro) => {
  // inserindo na api
  const result = await api.post('/Empresa/post', parametro)
  return result.data
}

const alterar = async ({ commit }, parametro) => {
  // modificando o valor na api
  const result = await api.post('/Empresa/put', parametro)

  return result.data.msg
}

// const deletar = async({ commit }, id) => {
//     // deletando Empresa na api
//     const result = (await Vue.prototype.$http.get('/Empresa/delete/id_empresa/' + id));

//     // retirando a linha da tabela
//     commit('DELETE_ITEM_LIST', id);

//     return result.data.msg;
// }

const deletar = async ({ commit }, id) => {
  // deletando equipamento na api
  let retorno = {}
  await api
    .get('/Empresa/delete/id_empresa/' + id)
    .then(function (result) {
      commit('DELETE_ITEM_LIST', id)
      // retirando a linha da tabela
      retorno.status = true
      retorno.msg = result.data.msg
    })
    .catch(function (result) {
      retorno.status = false
      retorno.msg = result.data.msg
    })
  return retorno
}

const exportar = async ({}, tipoExport) => {
  const result = await api.get('/Empresa/exportar/tipo/' + tipoExport)
  return result.data.link
}

export default {
  listar,
  listarTable,
  inserir,
  alterar,
  deletar,
  exportar,
  limparListaTable,
  limparLista,
  listarSemProgress: async ({ commit, state }, param) => {
    let result = {}
    // console.log(param);
    const params = param
    const qs = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')
    await axios({
      method: 'GET',
      url: process.env.VUE_APP_API + '/Empresa/get?' + qs,
      headers: {
        Authorization: window.localStorage.getItem('auth-jobb'),
      },
      validateStatus: (status) => {
        return true // I'm always returning true, you may want to do it depending on the status received
      },
    })
      .then((response) => {
        if (!response.data) throw response

        if (params.remove_incentivado) {
          commit('SET_LIST_TABLE', response.data.data)
        } else {
          commit('SET_LIST', response.data.data)
        }

        result = response.data.data
      })
      .catch((error) => {
        result = []
        console.error(error)
      })
    return result
  },
}

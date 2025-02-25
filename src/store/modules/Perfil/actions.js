import { api, apiV2 } from "@/services/http";

const listar = async ({ commit, state }, parametro) => {
    let list = [];
    await api.get('/Perfil/get').then(rs => {
        list = rs.data.data;
    }).catch(err => {
        console.error(err);
    });
    commit('SET_LIST', list);
}

const inserir = async ({ commit, state }, parametro) => {
    let retorno = {};
    // inserindo na api
    await api.post('/Perfil/post', parametro).then(function(result) {
        // adicionando na lista do state
        parametro.id_usuario_tipo = result.data.id_usuario_tipo;
        commit('INSERT_ITEM_LIST', parametro);
        retorno.status = true;
        retorno.msg = result.data.msg;
    }).catch(function(result) {
        retorno.status = false;
        retorno.msg = result.data.msg;
    });
    return retorno;
}

const deletar = async ({ commit, state }, id_usuario_tipo) => {
    let retorno = {};
    await api.get('/Perfil/delete/id_usuario_tipo/' + id_usuario_tipo).then(function(result) {
        commit('DELETE_ITEM_LIST', id_usuario_tipo);
        retorno.status = true;
        retorno.msg = result.data.msg;
    }).catch(function(result) {
        retorno.status = false;
        retorno.msg = result.data.msg;
    });
    return retorno;
}

const listarPermissoesUsuarios = async ({ commit }, id_usuario_tipo) => {
    const list = (await api.get('/Perfil/get/id_usuario_tipo/' + id_usuario_tipo + '/permissoes/get')).data.data;
    if (list) {
        window.localStorage.setItem('PERMISSOES_USUARIO_LIST', JSON.stringify(list));
        commit('SET_LIST_PERMISSOES_USUARIO', { list });
    }
}

export default {
    listar,
    inserir,
    deletar,
    listarPermissoesUsuarios,
    'listaStatusPermitidoUsuario': async({}, id_usuario_tipo) => {
        let listaStatus = [];
        await api.get('/Perfil/get/id_usuario_tipo/' + id_usuario_tipo + '/status/get').then(function(result) {
            listaStatus = result.data.data;
        });
        return listaStatus;
    },
    'listaContasBancariasBloqueadas': async({}, id_usuario_tipo) => {
        let listaContasBloqueadas = [];
        await api.get('/Perfil/get/id_usuario_tipo/' + id_usuario_tipo + '/contaBancaria/get').then(function(result) {
            listaContasBloqueadas = result.data.data;
        });
        return listaContasBloqueadas;
    },
    'alterar': async({}, parametro) => {
        let retorno = {};
        await api.post('/Perfil/put', parametro).then(result => {
            retorno.status = true;
            retorno.msg = result.data.msg;
        }).catch(result => {
            retorno.status = false;
            retorno.msg = result.data.msg;
        });
        return retorno;
    },
    'statusPorUsuarioTipo': async({ commit }, parametro) => {
        let retorno = {};
        await api.post('/Perfil/status-por-usuario-tipo', parametro).then((result) => {
            retorno = result.data;
            commit('SET_STATUS_POR_USUARIO_TIPO', retorno);
        }).catch((error) => {
            retorno = error;
        });
        return retorno;
    },
    'statusPorUsuarioTipoSemprogress': async({ commit }, parametro) => {
        let retorno = {};
        await api.post('/Perfil/status-por-usuario-tipo', parametro).then((result) => {
            retorno = result.data;
            commit('SET_STATUS_POR_USUARIO_TIPO', retorno);
        }).catch((error) => {
            retorno = error;
            commit('SET_STATUS_POR_USUARIO_TIPO', []);
        });
        return retorno;
    },
    'menuSideBar': async({ commit, state }, parametro) => {
        let list = [];
        await apiV2.get(`/menu/sidebar`).then(rs => {
            list = rs.data.data;
            commit('SET_ID_PLAN_JOBB_GESTOR', rs.data.id_plano_jobbgestor);
        }).catch(err => {
            console.error(err);
        });
        return list;
    }
};

import { api } from "@/services/http"; // Importando a instância `api`

const listar = async({ commit, state }, id_perfil_usuario) => {
    let list = [];
    await api.get('/permissoes/get').then(rs => {
        list = rs.data.data;
        window.localStorage.setItem('PERMISSOES_LIST', JSON.stringify({ list }));
        commit('SET_LIST', { list });
    }).catch(er => {
        console.error(er);
        window.localStorage.setItem('PERMISSOES_LIST', JSON.stringify({ list }));
        commit('SET_LIST', { list });
    });
    return list;
}

const inserir = async({ commit, state }, parametro) => {
    // Função de inserção, pode ser implementada conforme necessário.
}

const alterar = async({ commit, state }, parametro) => {
    // Função de alteração, pode ser implementada conforme necessário.
}

const deletar = async({ commit, state }, id_usuario_tipo) => {
    // Função de deleção, pode ser implementada conforme necessário.
}

const listarPermissaoUsuario = async({ commit, state }, object) => {
    let listPermissaoUsuario = [];
    await api.get('/permissoes/get/listar/permissao-usuario', { params: object }).then(rs => {
        listPermissaoUsuario = rs.data;
        commit('DESEBLE_PERFIL', false);
    }).catch(err => {
        commit('DESEBLE_PERFIL', true);
        console.error(err);
    });
    commit('SET_LIST_PERMISSAO_USUARIO', { listPermissaoUsuario });
    return listPermissaoUsuario;
}

const permissaoPagina = async({ commit, state }, object) => {
    commit('SET_LIST_PERMISSAO_PAGINA', object);
}

const permissoesExecucaoItemExecucaoTotal = async({ commit, state }, params) => {
    let result = {};
    await api.post('/permissoes/permissoes-execucao-item-execucao-total', params).then(rs => {
        result = rs.data;
    }).catch(err => {
        result = err.data;
        console.error(err);
    });
    return result;
}

export default {
    listar,
    inserir,
    alterar,
    deletar,
    listarPermissaoUsuario,
    permissaoPagina,
    permissoesExecucaoItemExecucaoTotal
};

const SET_LIST = (state, obj) => {
    state.list = obj.list
}

const SET_LIST_PERMISSAO_USUARIO = (state, obj) => {
    state.listPermissaoUsuario = obj.listPermissaoUsuario
}

const SET_LIST_PERMISSAO_PAGINA = (state, list) => {
    state.listPermissaoPagina = list;
}

const INSERT_ITEM_LIST = (state, obj) => {
    state.list.push(obj);
}

const UPDATE_ITEM_LIST = (state, obj) => {
    let indexToChange = state.list.findIndex((linhasLista) => linhasLista.id_usuario_tipo == obj.id_usuario_tipo);
    if (indexToChange >= 0) {
        for (var variavel in obj) {
            state.list[indexToChange][variavel] = obj[variavel];
        }
    }
}

const DELETE_ITEM_LIST = (state, id_usuario_tipo) => {
    let indexToDelete = state.list.findIndex((linhasLista) => linhasLista.id_usuario_tipo == id_usuario_tipo);
    if (indexToDelete >= 0) {
        state.list.splice(indexToDelete, 1);
    }
}

const DESEBLE_PERFIL = (state, obj) => {
    state.disable = obj;
}

export default {
    SET_LIST,
    INSERT_ITEM_LIST,
    UPDATE_ITEM_LIST,
    DELETE_ITEM_LIST,
    SET_LIST_PERMISSAO_USUARIO,
    SET_LIST_PERMISSAO_PAGINA,
    DESEBLE_PERFIL
}
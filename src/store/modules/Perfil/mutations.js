const SET_LIST = (state, obj) => {
    state.list = obj;
}

const SET_ID_PLAN_JOBB_GESTOR = (state, obj) => {
    state.id_plano_jobbgestor =  obj
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

const SET_LIST_PERMISSOES_USUARIO = (state, list) => {
    state.listPermissoesUsuario = list.list
}

const SET_STATUS_POR_USUARIO_TIPO = (state, result) => {
    state.statusPorUsuarioTipo = result.data;
}

export default {
    SET_LIST,
    SET_ID_PLAN_JOBB_GESTOR,
    INSERT_ITEM_LIST,
    UPDATE_ITEM_LIST,
    DELETE_ITEM_LIST,
    SET_LIST_PERMISSOES_USUARIO,
    SET_STATUS_POR_USUARIO_TIPO
}
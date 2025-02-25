const SET_LIST = (state, obj) => {
    state.list = obj
}
const SET_LIST_TABLE = (state, obj) => {
    state.listTable = obj
}

const INSERT_ITEM_LIST = (state, obj) => {
    state.list.push(obj);
}

const UPDATE_ITEM_LIST = (state, obj) => {
    var listaEmpresas = Object.keys(state.list.data).map(i => state.list.data[i]);

    let indexToChange = listaEmpresas.findIndex((linhasLista) => linhasLista.id_empresa == obj.id_empresa);
    if (indexToChange >= 0) {
        for (var variavel in obj) {
            state.list[indexToChange][variavel] = obj[variavel];
        }
    }

}

const DELETE_ITEM_LIST = (state, id) => {
    var listaEmpresas = Object.keys(state.list.data).map(i => state.list.data[i]);

    let indexToDelete = listaEmpresas.findIndex((linhasLista) => linhasLista.id_empresa === id);
    if (indexToDelete >= 0) {
        listaEmpresas.splice(indexToDelete, 1);
    }
    state.list.data = listaEmpresas;
}

export default {
    SET_LIST,
    INSERT_ITEM_LIST,
    UPDATE_ITEM_LIST,
    DELETE_ITEM_LIST,
    SET_LIST_TABLE
}
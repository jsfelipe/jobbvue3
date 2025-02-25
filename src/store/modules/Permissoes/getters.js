export default {
    listaPermissoes: (state) => {
        return state.list;
    },
    listDescricaoPermissaoUsuario: (state) => {
        let list = [];
        //console.log(state.listPermissaoUsuario);
        try {
            // console.log('state permissoes',state.listPermissaoUsuario)
            state.listPermissaoUsuario.data.forEach((obj) => {
                list.push(obj.descricao);
            });            
        } catch (error) {
            console.log("error",error);
        }
        return list;
    },
    listPermissaoUsuario: (state) => state.listPermissaoUsuario,

}
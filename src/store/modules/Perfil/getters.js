export default {
    listaPerfil: (state) => (idTipoPessoa) => {
      try {
        if (typeof idTipoPessoa !== 'undefined') {
            var resultado = state.list.find(function(el) {
                if (el.id_usuario_tipo === idTipoPessoa) return true;
            });
            return resultado;
        }
        return state.list;
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    getListaPermissoesPerfil: (state) => {
        return state.listPermissoesUsuario;
    },
    getStatusPorUsuarioTipo: (state) => {
        return state.statusPorUsuarioTipo;
    }
}

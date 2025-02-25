export default {
  /**
   * Verificar se existe usuario logado.
   */
  guest: (state) => state.token !== null,

  token: state => state.token,

  /**
   * Obter id do usuario
   */
  id: (state) =>
    state.data && state.data.hasOwnProperty("id_usuario")
      ? state.data.id_usuario
      : undefined,

  /**
   * Verificar se dados foram carregados.
   */
  loaded: (state) => !_.isEmpty(state.data),

  /**
   * Retornar dados do usuario.
   */
  detail: (state) => state.data,

  /**
   * Obter dado específico do usuario
   */
  get: (state) => (key, _d = null) => _.get(state.data, key, _d)
}

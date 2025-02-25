const SET_LOGIN = (state, token) => {
  state.token = token
}

const SET_LOGOUT = (state) => {
  state.token = null
  state.data = {}
}

const SET_DATA = (state, data) => {
  state.data = data;
}

const CHANGE_AVATAR = (state, avatar) => {
  try {
      state.data.avatar = avatar;
  } catch (e) {
    console.error(e);
  }
}

const SET_CAMPOS_CUSTOMIZADOS = (state, param) => {
  state.camposCustomizados = (param);
}

export default {
  SET_LOGIN,
  SET_LOGOUT,
  SET_DATA,
  CHANGE_AVATAR,
  SET_CAMPOS_CUSTOMIZADOS
}

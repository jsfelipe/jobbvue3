import { createStore } from 'vuex'
import Persist from 'vuex-persist'
import Login from './modules/Login'
import Perfil from './modules/Perfil'
import Permissoes from './modules/Permissoes'
// import Dashboard from './modules/Dashboard'
// import Empresa from './modules/Empresa'
// import Pessoa from './modules/Pessoa'
// import CamposPersonalizados from "./modules/CamposPersonalizados"

// Configuração do Vuex Persist
const VuexLocal = new Persist({
  storage: window.localStorage,
  modules: [
    'Login',
    'Perfil',
    'Permissoes',
    // 'Dashboard',
    // 'Empresa',
    // 'Pessoa',
    // 'CamposPersonalizados'
  ],
})

// Criação da Store
const store = createStore({
  modules: {
    Login,
    Perfil,
    Permissoes,
    // Dashboard,
    // Empresa,
    // Pessoa,
    // CamposPersonalizados
  },
  plugins: [VuexLocal.plugin],
})

export default store

import { reactive, toRefs } from "vue";
import { api } from "@/services/http";

const state = reactive({
  colunas: null,
  sem_colunas_base: false
});

export default function useColunas() {
  const getColunas = async modelColunas => {
    const retorno = await api.get(
      "/configuracoes/get/columns/" + modelColunas
    );

    if (retorno.data.data[0] !== undefined) {
      //console.log('entrou', retorno.data.data);
      state.colunas = JSON.parse(retorno.data.data[0].columns);
      return state.colunas;
    } else {
      // nao existe colunas no banco para o usuario
      state.sem_colunas_base = true;
      //console.log('col base', state.sem_colunas_base);
      return state.sem_colunas_base;
    }
  };

  return { ...toRefs(state), getColunas };
}

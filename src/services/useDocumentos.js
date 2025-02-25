import { reactive, computed, toRefs } from "@vue/composition-api";
import Vue from "vue";

const state = reactive({ tipodocumentos: {} });

export default function useDocumentos() {
  function setTipoDocumentos(item) {
    state.tipodocumentos = item;
  }

  async function loadTipoDocumentos(id) {
    let result = await Vue.prototype.$http.get("/documento/get");
    result = result.data.data.data;
    //console.log({ result });
    setTipoDocumentos(result);
  }

  const getTipoDocumentos = computed(() => state.tipodocumentos);

  return { ...toRefs(state), getTipoDocumentos, loadTipoDocumentos };
}

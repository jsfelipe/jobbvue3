import { reactive, computed, toRefs } from "@vue/composition-api";
import Vue from "vue";

const state = reactive({ persons: [] });

export default function usePersons() {
  function setPersons(item) {
    state.persons = item;
  }

  async function loadPersons() {
    let params = {}
    params.value = true
    let result = await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/persons`,{params})
    setPersons(result.data.persons);
  }

  const getPersons = computed(() => state.persons);

  return { ...toRefs(state), getPersons, loadPersons };
}

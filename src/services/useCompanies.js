import { reactive, computed, toRefs } from "@vue/composition-api";
import Vue from "vue";

const state = reactive({ products: [] });

export default function useCompanies() {
  function setCompanies(item) {
    state.companies = item;
  }

  async function loadCompanies() {
    let result = await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/budget/companies`)
    setCompanies(result.data.companies);
  }

  const getCompanies = computed(() => state.companies);

  return { ...toRefs(state), getCompanies, loadCompanies };
}

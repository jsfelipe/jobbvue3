import { reactive, computed, toRefs } from "@vue/composition-api";
import Vue from "vue";

const state = reactive({ products: [] });

export default function useProducts() {
  function setProducts(item) {
    state.products = item;
  }

  async function loadProducts() {
    let params = {}
    params.value = true
    let result = await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/budget/handsontable-products`)
    setProducts(result.data.columns);
  }

  const getProducts = computed(() => state.products);

  return { ...toRefs(state), getProducts, loadProducts };
}

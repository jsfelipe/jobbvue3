import { reactive, computed, toRefs } from "@vue/composition-api";
import Vue from "vue";

const state = reactive({ contacts: [] });

export default function useContacts() {
  function setContacts(item) {
    state.contacts = item;
  }

  async function loadContacts(id) { 
    let result = await Vue.prototype.$http.get(`${process.env.VUE_APP_API_V2}/contacts/${id}`)  
     setContacts(result.data.contacts);
  }

  const getContacts = computed(() => state.contacts);

  return { ...toRefs(state), getContacts, loadContacts };
}

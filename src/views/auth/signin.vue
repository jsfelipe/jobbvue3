<template>
  <FullScreenLayout>
    <div class="relative flex w-full h-screen px-4 py-6 overflow-hidden bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div class="flex flex-col flex-1 p-6 rounded-2xl sm:rounded-none sm:border-0 sm:p-8">
        <div class="w-full max-w-md pt-10 mx-auto">
          <router-link
            to="/"
            class="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg
              class="stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.7083 5L7.5 10.2083L12.7083 15.4167"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to dashboard
          </router-link>
        </div>
        <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div>
            <div class="mb-5 sm:mb-8">
              <h1 class="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Acessar
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Digite seu domínio, login e senha para entrar!
              </p>
            </div>
            <div>
              <form @submit.prevent="submitForm">
                <div class="space-y-5">
                  <!-- Dominio -->
                  <div>
                    <label for="dominio" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Domínio<span class="text-error-500">*</span>
                    </label>
                    <Field name="dominio" rules="required" v-slot="{ field, errorMessage }">
                      <input
                        v-bind="field"
                        type="text"
                        id="dominio"
                        placeholder="Insira seu domínio"
                        class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        :class="{ 'border-error-500': errorMessage }"
                      />
                      <span v-if="errorMessage" class="text-sm text-error-500">{{ errorMessage }}</span>
                    </Field>
                  </div>
                  <!-- Login -->
                  <div>
                    <label for="login" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Login<span class="text-error-500">*</span>
                    </label>
                    <Field name="login" rules="required" v-slot="{ field, errorMessage }">
                      <input
                        v-bind="field"
                        type="text"
                        id="login"
                        placeholder="Insira seu login"
                        class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        :class="{ 'border-error-500': errorMessage }"
                      />
                      <span v-if="errorMessage" class="text-sm text-error-500">{{ errorMessage }}</span>
                    </Field>
                  </div>
                  <!-- Password -->
                  <div>
                    <label for="password" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Senha<span class="text-error-500">*</span>
                    </label>
                    <Field name="senha" rules="required" v-slot="{ field, errorMessage }">
                      <div class="relative">
                        <input
                          v-bind="field"
                          :type="showPassword ? 'text' : 'password'"
                          id="senha"
                          placeholder="Insira sua senha"
                          class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                          :class="{ 'border-error-500': errorMessage }"
                        />
                        <span
                          @click="togglePasswordVisibility"
                          class="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400"
                        >
                          <svg
                            v-if="!showPassword"
                            class="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z"
                              fill="#98A2B3"
                            />
                          </svg>
                          <svg
                            v-else
                            class="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z"
                              fill="#98A2B3"
                            />
                          </svg>
                        </span>
                      </div>
                      <span v-if="errorMessage" class="text-sm text-error-500">{{ errorMessage }}</span>
                    </Field>
                  </div>
                  <!-- Button -->
                  <div>
                    <button
                      type="submit"
                      class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
                      :disabled="loading"
                    >
                      <span v-if="loading">Carregando...</span>
                      <span v-else>Acessar</span>
                    </button>
                  </div>
                </div>
              </form>
              <div class="mt-5">
                <p class="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                  Ainda não tem uma conta?
                  <a :href="linkCad" class="text-brand-500 hover:text-brand-600 dark:text-brand-400">CADASTRE-SE!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FullScreenLayout>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { Field, useForm, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';
import FullScreenLayout from '@/components/layout/FullScreenLayout.vue';
import { toast } from 'vue3-toastify';

defineRule('required', required);

const store = useStore();
const { handleSubmit, setFieldValue } = useForm();

const state = reactive({
  image: '',
  title: '',
  classCad: '',
  linkCad: '',
  classBack: '',
  titleText: ''
});

const model = reactive({
  login: '',
  senha: '',
  dominio: '',
});

const loading = ref(false);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submitForm = handleSubmit(async (values) => {
  loading.value = true;
  try {
    await store.dispatch('Login/doLogin', values);
    const user = await store.dispatch('Login/me');

    await Promise.all([
      store.dispatch('Perfil/listarPermissoesUsuarios', user.id_usuario_tipo),
      store.dispatch('Permissoes/listarPermissaoUsuario', user)
    ]);

    toast.success('Login realizado com sucesso!', {
      autoClose: 3000,
    });

    // Redirecionamento
    window.location.href = '/';

  } catch (error) {
    console.error('Login failed:', error);

    // Notificação de erro
    if (error.response && error.response.data && error.response.data.msg) {
      toast.error(error.response.data.msg, {
        autoClose: 2000,
      });
    } else {
      toast.error('Erro ao realizar login. Tente novamente.', {
        autoClose: 2000,
      });
    }
  } finally {
    loading.value = false;
  }
});


</script>
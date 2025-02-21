<template>
  <aside
    :class="[
      'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200',
      {
        'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
        'lg:w-[90px]': !isExpanded && !isHovered,
        'translate-x-0 w-[290px]': isMobileOpen,
        '-translate-x-full': !isMobileOpen,
        'lg:translate-x-0': true,
      },
    ]"
    @mouseenter="!isExpanded && (isHovered = true)"
    @mouseleave="isHovered = false"
  >
    <div
      :class="[
        'py-5 flex',
        !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
      ]"
    >
      <router-link to="/">
        <img
          v-if="isExpanded || isHovered || isMobileOpen"
          class="dark:hidden"
          src="/images/logo/logo-jobb.svg"
          alt="Logo"
          width="80"
          height="30"
        />
        <img
          v-if="isExpanded || isHovered || isMobileOpen"
          class="hidden dark:block"
          src="/images/logo/logo-jobb-dark.svg"
          alt="Logo"
          width="80"
          height="30"
        />
        <img
          v-else
          src="/images/logo/logo-jobb-icon.svg"
          alt="Logo"
          width="32"
          height="32"
        />
      </router-link>
    </div>
    <div
      class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar"
    >
      <nav class="mb-6">
        <div class="flex flex-col gap-4">
          <div v-for="(menuGroup, groupIndex) in menuGroups" :key="groupIndex">
            <h2
              :class="[
                'mb-4 text-xs uppercase flex leading-[20px] text-gray-400',
                !isExpanded && !isHovered
                  ? 'lg:justify-center'
                  : 'justify-start',
              ]"
            >
              <template v-if="isExpanded || isHovered || isMobileOpen">
                {{ menuGroup.title }}
              </template>
              <HorizontalDots v-else />
            </h2>
            <ul class="flex flex-col gap-4">
              <li v-for="(item, index) in menuGroup.items" :key="item.name">
                <button
                  v-if="item.subItems"
                  @click="toggleSubmenu(groupIndex, index)"
                  :class="[
                    'menu-item group w-full',
                    {
                      'menu-item-active': isSubmenuOpen(groupIndex, index),
                      'menu-item-inactive': !isSubmenuOpen(groupIndex, index),
                    },
                    !isExpanded && !isHovered
                      ? 'lg:justify-center'
                      : 'lg:justify-start',
                  ]"
                >
                  <span
                    :class="[
                      isSubmenuOpen(groupIndex, index)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span
                    v-if="isExpanded || isHovered || isMobileOpen"
                    class="menu-item-text"
                    >{{ item.name }}</span
                  >
                  <ChevronDownIcon
                    v-if="isExpanded || isHovered || isMobileOpen"
                    :class="[
                      'ml-auto w-5 h-5 transition-transform duration-200',
                      {
                        'rotate-180 text-black': isSubmenuOpen(
                          groupIndex,
                          index
                        ),
                      },
                    ]"
                  />
                </button>
                <router-link
                  v-else-if="item.path"
                  :to="item.path"
                  :class="[
                    'menu-item group',
                    {
                      'menu-item-active': isActive(item.path),
                      'menu-item-inactive': !isActive(item.path),
                    },
                  ]"
                >
                  <span
                    :class="[
                      isActive(item.path)
                        ? 'menu-item-icon-active'
                        : 'menu-item-icon-inactive',
                    ]"
                  >
                    <component :is="item.icon" />
                  </span>
                  <span
                    v-if="isExpanded || isHovered || isMobileOpen"
                    class="menu-item-text"
                    >{{ item.name }}</span
                  >
                </router-link>
                <transition
                  @enter="startTransition"
                  @after-enter="endTransition"
                  @before-leave="startTransition"
                  @after-leave="endTransition"
                >
                  <div
                    v-show="
                      isSubmenuOpen(groupIndex, index) &&
                      (isExpanded || isHovered || isMobileOpen)
                    "
                  >
                    <ul class="mt-2 space-y-1 ml-9">
                      <li v-for="subItem in item.subItems" :key="subItem.name">
                        <router-link
                          :to="subItem.path"
                          :class="[
                            'menu-dropdown-item',
                            {
                              'menu-dropdown-item-active': isActive(
                                subItem.path
                              ),
                              'menu-dropdown-item-inactive': !isActive(
                                subItem.path
                              ),
                            },
                          ]"
                        >
                          {{ subItem.name }}
                          <span class="flex items-center gap-1 ml-auto">
                            <span
                              v-if="subItem.new"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              new
                            </span>
                            <span
                              v-if="subItem.pro"
                              :class="[
                                'menu-dropdown-badge',
                                {
                                  'menu-dropdown-badge-active': isActive(
                                    subItem.path
                                  ),
                                  'menu-dropdown-badge-inactive': !isActive(
                                    subItem.path
                                  ),
                                },
                              ]"
                            >
                              pro
                            </span>
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SidebarWidget v-if="isExpanded || isHovered || isMobileOpen" />
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import {
  GridIcon,
  CalenderIcon,
  UserCircleIcon,
  ChatIcon,
  MailIcon,
  DocsIcon,
  PieChartIcon,
  ChevronDownIcon,
  HorizontalDots,
  PageIcon,
  TableIcon,
  ListIcon,
  PlugInIcon,
} from "../../icons";
import SidebarWidget from "./SidebarWidget.vue";
import BoxCubeIcon from "@/icons/BoxCubeIcon.vue";
import { useSidebar } from "@/composables/useSidebar";

const route = useRoute();

const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebar();

const menuGroups = [
  {
    title: "Menu",
    items: [
      {
        icon: GridIcon,
        name: "Dashboard",
        path: "/",
      },
      {
        icon: CalenderIcon,
        name: "Cadastros",
        subItems: [
          { name: "Unidades", path: "/unidades", pro: false },
          { name: "Pessoas", path: "/pessoas", pro: false },
          { name: "Usuários", path: "/usuarios", pro: false },
          { name: "Permissões", path: "/permissoes", pro: false },
          { name: "Produtos", path: "/produtos", pro: false },
          { name: "Serviços", path: "/servicos", pro: false },
        ],
      },
      {
        icon: UserCircleIcon,
        name: "Tarefas",
        path: "/tarefas",
      },
      {
        icon: CalenderIcon,
        name: "Orçamentos",
        subItems: [
          { name: "Publicitários", path: "/publicitarios", pro: false },
          { name: "Audiovisual", path: "/audiovisual", pro: false },
        ],
      },
      {
        icon: CalenderIcon,
        name: "Financeiro",
        subItems: [
          { name: "Extrato de lançamentos", path: "/extrato-de-lancamentos", pro: false },
          { name: "Contas a pagar", path: "/contas-a-pagar", pro: false },
          { name: "Contas a receber", path: "/contas-a-receber", pro: false },
          { name: "Relação de pagamentos", path: "/relacao-de-pagamentos", pro: false },
          { name: "Faturamento", path: "/faturamento", pro: false },
          { name: "Fluxo de caixa", path: "/fluxo-de-caixa", pro: false },
          { name: "Verba de produção", path: "/verba-de-producao", pro: false },
          { name: "Plano de contas", path: "/plano-de-contas", pro: false },
          { name: "Contas bancárias", path: "/contas-bancarias", pro: false },
          { name: "Centro de custo", path: "/centro-de-custo", pro: false },
        ],
      },
      {
        icon: CalenderIcon,
        name: "Equipamentos",
        subItems: [
          { name: "Consulta", path: "/consulta", pro: false },
          { name: "Saída/Entrada", path: "/saida-entrada", pro: false },
        ],
      },
      {
        icon: CalenderIcon,
        name: "Relatórios",
        subItems: [
          { name: "Orçamento por período", path: "/orcamento-por-periodo", pro: false },
          { name: "Visão do orçamento", path: "/visao-do-orcamento", pro: false },
          { name: "Lançamentos por dia", path: "/Lancamentos-por-dia", pro: false },
          { name: "Contas pagas e a pagar", path: "/contas-pagas-e-a-pagar", pro: false },
          { name: "Contas recebidas e a receber", path: "/contas-recebidas-e-a-receber", pro: false },
          { name: "Recebimentos vs Faturamentos", path: "/recebimentos-faturamentos", pro: false },
          { name: "Conciliação bancária", path: "/conciliacao-bancaria", pro: false },
          { name: "Fornecedores por job", path: "/fornecedores-por-job", pro: false },
          { name: "Planilhas de receitas", path: "/planilhas-de-receitas", pro: false },
          { name: "Planilhas de despesas", path: "/planilhas-de-despesas", pro: false },
          { name: "Demonstrativos DRE", path: "/demonstrativos-dre", pro: false },
          { name: "Acompanhamento financeiro", path: "/acompanhamento-financeiro", pro: false },
          { name: "Resultado financeiro", path: "/resultado-financeiro", pro: false },
        ],
      },
      {
        icon: CalenderIcon,
        name: "Configurações",
        subItems: [
          { name: "Opções gerais", path: "/opcoes-gerais", pro: false },
          { name: "Modelo de carta", path: "/modelo-de-carta", pro: false },
          { name: "Contratos", path: "/contratos", pro: false },
          { name: "Categoria de pessoas", path: "/categorias-de-pessoas", pro: false },
          { name: "Tipos de documentos", path: "/tipos-de-documentos", pro: false },
          { name: "Unidades e medidas", path: "/unidades-e-medidas", pro: false },
        ],
      },
      {
        icon: UserCircleIcon,
        name: "Meus perfil",
        path: "/meu-perfil",
      },
    ],
  },
];

const isActive = (path) => route.path === path;

const toggleSubmenu = (groupIndex, itemIndex) => {
  const key = `${groupIndex}-${itemIndex}`;
  openSubmenu.value = openSubmenu.value === key ? null : key;
};

const isAnySubmenuRouteActive = computed(() => {
  return menuGroups.some((group) =>
    group.items.some(
      (item) =>
        item.subItems && item.subItems.some((subItem) => isActive(subItem.path))
    )
  );
});

const isSubmenuOpen = (groupIndex, itemIndex) => {
  const key = `${groupIndex}-${itemIndex}`;
  return (
    openSubmenu.value === key ||
    (isAnySubmenuRouteActive.value &&
      menuGroups[groupIndex].items[itemIndex].subItems?.some((subItem) =>
        isActive(subItem.path)
      ))
  );
};

const startTransition = (el) => {
  el.style.height = "auto";
  const height = el.scrollHeight;
  el.style.height = "0px";
  el.offsetHeight; // force reflow
  el.style.height = height + "px";
};

const endTransition = (el) => {
  el.style.height = "";
};
</script>

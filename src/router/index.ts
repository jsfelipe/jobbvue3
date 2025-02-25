import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Ecommerce',
      component: () => import('../views/Ecommerce.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/unidades',
      name: 'Unidades',
      component: () => import('../views/Cadastros/Empresas/Listar.vue'),
      meta: {
        title: 'Unidades',
      },
    },
    {
      path: '/pessoas',
      name: 'Pessoas',
      component: () => import('../views/Cadastros/Pessoas.vue'),
      meta: {
        title: 'Pessoas',
      },
    },
    {
      path: '/usuarios',
      name: 'Usuários',
      component: () => import('../views/Cadastros/Usuarios.vue'),
      meta: {
        title: 'Usuários',
      },
    },
    {
      path: '/permissoes',
      name: 'Permissões',
      component: () => import('../views/Cadastros/Permissoes.vue'),
      meta: {
        title: 'Permissões',
      },
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: () => import('../views/Cadastros/Produtos.vue'),
      meta: {
        title: 'Produtos',
      },
    },
    {
      path: '/servicos',
      name: 'Serviços',
      component: () => import('../views/Cadastros/Servicos.vue'),
      meta: {
        title: 'Serviços',
      },
    },
    {
      path: '/tarefas',
      name: 'Tarefas',
      component: () => import('../views/Others/Tarefas.vue'),
      meta: {
        title: 'Tarefas',
      },
    },
    {
      path: '/publicitarios',
      name: 'Publicitários',
      component: () => import('../views/Orcamentos/publicitarios.vue'),
      meta: {
        title: 'Publicitários',
      },
    },
    {
      path: '/audiovisual',
      name: 'Audiovisual',
      component: () => import('../views/Orcamentos/audiovisual.vue'),
      meta: {
        title: 'Audiovisual',
      },
    },
    {
      path: '/extrato-de-lancamentos',
      name: 'Extrato de lançamentos',
      component: () => import('../views/Financeiro/extrato-de-lancamentos.vue'),
      meta: {
        title: 'Extrato de lançamentos',
      },
    },
    {
      path: '/contas-a-pagar',
      name: 'Contas a pagar',
      component: () => import('../views/Financeiro/contas-a-pagar.vue'),
      meta: {
        title: 'Contas a pagar',
      },
    },
    {
      path: '/contas-a-receber',
      name: 'Contas a receber',
      component: () => import('../views/Financeiro/contas-a-receber.vue'),
      meta: {
        title: 'Contas a receber',
      },
    },
    {
      path: '/relacao-de-pagamentos',
      name: 'Relação de pagamentos',
      component: () => import('../views/Financeiro/relacao-de-pagamentos.vue'),
      meta: {
        title: 'Relação de pagamentos',
      },
    },
    {
      path: '/faturamento',
      name: 'Faturamento',
      component: () => import('../views/Financeiro/faturamento.vue'),
      meta: {
        title: 'Faturamento',
      },
    },
    {
      path: '/fluxo-de-caixa',
      name: 'Fluxo de caixa',
      component: () => import('../views/Financeiro/fluxo-de-caixa.vue'),
      meta: {
        title: 'Fluxo de caixa',
      },
    },
    {
      path: '/verba-de-producao',
      name: 'Verba de produção',
      component: () => import('../views/Financeiro/verba-de-producao.vue'),
      meta: {
        title: 'Verba de produção',
      },
    },
    {
      path: '/plano-de-contas',
      name: 'Plano de contas',
      component: () => import('../views/Financeiro/plano-de-contas.vue'),
      meta: {
        title: 'Plano de contas',
      },
    },
    {
      path: '/contas-bancarias',
      name: 'Contas bancárias',
      component: () => import('../views/Financeiro/contas-bancarias.vue'),
      meta: {
        title: 'Contas bancárias',
      },
    },
    {
      path: '/centro-de-custo',
      name: 'Centro de custo',
      component: () => import('../views/Financeiro/centro-de-custo.vue'),
      meta: {
        title: 'Centro de custo',
      },
    },
    {
      path: '/consulta',
      name: 'Consulta',
      component: () => import('../views/Equipamentos/consulta.vue'),
      meta: {
        title: 'Consulta',
      },
    },
    {
      path: '/saida-entrada',
      name: 'Saída/Entrada',
      component: () => import('../views/Equipamentos/saida-entrada.vue'),
      meta: {
        title: 'Saída/Entrada',
      },
    },
    {
      path: '/orcamento-por-periodo',
      name: 'Orçamento por período',
      component: () => import('../views/Relatorios/orcamento-por-periodo.vue'),
      meta: {
        title: 'Orçamento por período',
      },
    },
    {
      path: '/visao-do-orcamento',
      name: 'Visão do orçamento',
      component: () => import('../views/Relatorios/visao-do-orcamento.vue'),
      meta: {
        title: 'Visão do orçamento',
      },
    },
    {
      path: '/lancamentos-por-dia',
      name: 'Lançamentos por dia',
      component: () => import('../views/Relatorios/lancamentos-por-dia.vue'),
      meta: {
        title: 'Lançamentos por dia',
      },
    },
    {
      path: '/contas-pagas-e-a-pagar',
      name: 'Contas pagas e a pagar',
      component: () => import('../views/Relatorios/contas-pagas-e-a-pagar.vue'),
      meta: {
        title: 'Contas pagas e a pagar',
      },
    },
    {
      path: '/contas-recebidas-e-a-receber',
      name: 'Contas recebidas e a receber',
      component: () => import('../views/Relatorios/contas-recebidas-e-a-receber.vue'),
      meta: {
        title: 'Contas recebidas e a receber',
      },
    },
    {
      path: '/recebimentos-faturamentos',
      name: 'Recebimentos vs Faturamentos',
      component: () => import('../views/Relatorios/recebimentos-faturamentos.vue'),
      meta: {
        title: 'Recebimentos vs Faturamentos',
      },
    },
    {
      path: '/conciliacao-bancaria',
      name: 'Conciliação bancária',
      component: () => import('../views/Relatorios/conciliacao-bancaria.vue'),
      meta: {
        title: 'Conciliação bancária',
      },
    },
    {
      path: '/fornecedores-por-job',
      name: 'Fornecedores por job',
      component: () => import('../views/Relatorios/fornecedores-por-job.vue'),
      meta: {
        title: 'Fornecedores por job',
      },
    },
    {
      path: '/planilhas-de-receitas',
      name: 'Planilhas de receitas',
      component: () => import('../views/Relatorios/planilhas-de-receitas.vue'),
      meta: {
        title: 'Planilhas de receitas',
      },
    },
    {
      path: '/planilhas-de-despesas',
      name: 'Planilhas de despesas',
      component: () => import('../views/Relatorios/planilhas-de-despesas.vue'),
      meta: {
        title: 'Planilhas de despesas',
      },
    },
    {
      path: '/Demonstrativos-dre',
      name: 'Demonstrativos DRE',
      component: () => import('../views/Relatorios/demonstrativos-dre.vue'),
      meta: {
        title: 'Demonstrativos DRE',
      },
    },
    {
      path: '/Acompanhamento-financeiro',
      name: 'Acompanhamento financeiro',
      component: () => import('../views/Relatorios/acompanhamento-financeiro.vue'),
      meta: {
        title: 'Acompanhamento financeiro',
      },
    },
    {
      path: '/Resultado-financeiro',
      name: 'Resultado financeiro',
      component: () => import('../views/Relatorios/resultado-financeiro.vue'),
      meta: {
        title: 'Resultado financeiro',
      },
    },
    {
      path: '/Opcoes-gerais',
      name: 'Opções gerais',
      component: () => import('../views/Configuracoes/opcoes-gerais.vue'),
      meta: {
        title: 'Opções gerais',
      },
    },
    {
      path: '/Modelo-de-carta',
      name: 'Modelo de carta',
      component: () => import('../views/Configuracoes/modelo-de-carta.vue'),
      meta: {
        title: 'Modelo de carta',
      },
    },
    {
      path: '/Contratos',
      name: 'Contratos',
      component: () => import('../views/Configuracoes/contratos.vue'),
      meta: {
        title: 'Contratos',
      },
    },
    // {
    //   path: '/Categoria-de-pessoas',
    //   name: 'Categoria de pessoas',
    //   component: () => import('../views/Others/categoria-de-pessoas.vue'),
    //   meta: {
    //     title: 'Categoria de pessoas',
    //   },
    // },
    // {
    //   path: '/Tipos-de-documentos',
    //   name: 'Tipos de documentos',
    //   component: () => import('../views/Others/tipos-de-documentos.vue'),
    //   meta: {
    //     title: 'Tipos de documentos',
    //   },
    // },
    // {
    //   path: '/Unidades-e-medidas',
    //   name: 'Unidades e medidas',
    //   component: () => import('../views/Others/unidades-e-medidas.vue'),
    //   meta: {
    //     title: 'Unidades e medidas',
    //   },
    // },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/login.vue'),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/auth/signup.vue'),
      meta: {
        title: 'Signup',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = ` ${to.meta.title} | Sistema Jobb 4.0`
  next()
})

import DefaultHeader from "@/Layout/DefaultHeader.vue"

export default [
  {
    path: "/unidades/listar",
    name: "unidades.listar",
    components: {
      default: () => import("./Listar.vue"),
      header: DefaultHeader
    },
    meta: {title: "Unidades"}
  },
  {
    path: "/unidades/formulario",
    name: "unidades.novo",
    components: {
      default: () => import("./Formulario.vue"),
      header: DefaultHeader
    },
    meta: {title: "Cadastrar Unidade"}
  },
  {
    path: "/unidades/formulario/:id",
    name: "unidades.editar",
    components: {
      default: () => import("./Formulario.vue"),
      header: DefaultHeader
    },
    meta: {title: "Editar Unidade"}
  }
]

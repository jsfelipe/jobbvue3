import Vue from "vue";
import { permissoesDaPagina } from "@/components/Jobb/Utils/Util";
export default {
  listarOrcamentoPublicitario: async parametro => {
    localStorage.setItem("searchPublicitarios", JSON.stringify(parametro));
    parametro = JSON.parse(localStorage.getItem("searchPublicitarios"));
    let result = {};
    try {
      let params = {};
      if (typeof parametro !== "undefined") {
        params = {
          periodo1: parametro.periodo1 ? parametro.periodo1: null,
          periodo2: parametro.periodo2 ? parametro.periodo2: null,
          data_tipo: parametro.data_tipo ? parametro.data_tipo: null,
          nome: parametro.nome ? parametro.nome : null,
          id_empresa: parametro.id_empresa ? parametro.id_empresa : null,
          status: parametro.status ? parametro.status : null,
          id_responsavel: parametro.id_responsavel
            ? parametro.id_responsavel
            : null,
          id_pessoa_produtor: parametro.id_pessoa_produtor
            ? parametro.id_pessoa_produtor
            : null,
          id_orcamento: parametro.id_orcamento ? parametro.id_orcamento : null,
          currentPage: parametro.currentPage ? parametro.currentPage : 1,
          perPage: parametro.perPage ? parametro.perPage : 15,
          order_column: parametro.order_column
            ? parametro.order_column
            : "id_orcamento",
          order: parametro.order ? parametro.order : "DESC",
          visualizarStatusFaturamento: permissoesDaPagina(
            "",
            {
              descricao: "Visualizar Status do Faturamento",
              module: "orcamento"
            },
            "Orçamento"
          ),
          consultar: permissoesDaPagina(
            "",
            { descricao: "Consultar", module: "orcamento" },
            "Orçamento"
          ),
          listarTodosOrcamentos: permissoesDaPagina(
            "",
            {
              descricao:
                "Listar todos os orçamentos (Desmacar para Freelancer)",
              module: "visualizacao-impressao"
            },
            "Orçamento"
          )
        };
        if (params.data_cadastro !== "undefined") {
          params.data_cadastro = parametro.data_cadastro;
        }
        if (parametro.page) {
          params.page = parametro.page;
        }
      }

      await Vue.prototype.$http
        .get("/orcamento/listar-orcamento-publicitario/", { params })
        .then(response => {
          result = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    } catch (e) {
      console.error(e);
    }
    return result;
  },

  deletar: async id_orcamento => {
    let result = {};
    await Vue.prototype.$http
      .delete("/orcamento?id=" + id_orcamento)
      .then(response => {
        if (!response.data) throw response;
        // console.log(response);
        result = response.data;
      })
      .catch(error => {
        console.error(error);
        result = error.data;
      });
    return result;
  }
};

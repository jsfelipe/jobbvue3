<template>
  <div>
    <jobb-list 
      :data="listData"
      :model="model"
      modelKey="id_empresa"
      :allColumns="allColumns"
      cadastrarRoute="/unidades/formulario"
      :rowsSelected="rowsSelected"
      :search="searchData"
      :listAction="listar"
      :deleteAction="deletar"
      :exportAction="exportar"
      @handleSelectionChange="handleSelectionChange"
    ></jobb-list>
  </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  import jobbModalCamposPersonalizados from "@/components/Jobb/Utils/CamposPersonalizados/ModalCamposPersonalizados.vue";
  import {permissoesDaPagina} from "../../../components/Jobb/Utils/Util";

  export default {
    components: {
      jobbModalCamposPersonalizados
    },
    computed: {
      /***
       * Returns a page from the searched data or the whole data. Search is performed in the watch section below
       */
      ...mapState("Empresa", {
        listData: state => {
          return state.listTable;
        } 
      }),
      listData2(){
        let self = this;
        let state = self.$store.state.Empresa;
        let result = [];
        if (self.permissoesPagina()) {
          result = state.listTable;
        }      
        //console.log(result);
        return result;
      }
    },
    data() {
      return {
        model: "Empresa",
        allColumns: [
          {
            prop: "id_empresa",
            label: "#",
            minWidth: 50,
            fixed: true
          },
          {
            prop: "razao",
            label: "Empresa",
            minWidth: 200,
            fixed: true
          },
          {
            prop: "email",
            label: "Email",
            minWidth: 250,
            fixed: true
          },
          {
            prop: "cidade",
            label: "Cidade",
            minWidth: 150
          },
          {
            prop: "fone",
            label: "Telefone",
            minWidth: 100
          },
          {
            prop: "razao",
            label: "Razão",
            minWidth: 120
          },
          {
            prop: "fantasia",
            label: "Fantasia",
            minWidth: 120
          },
          {
            prop: "sigla",
            label: "Sigla",
            minWidth: 80
          },
          {
            prop: "cnpj",
            label: "CNPJ",
            minWidth: 120
          },
          {
            prop: "celular",
            label: "Celular",
            minWidth: 100
          },
          {
            prop: "site",
            label: "Site",
            minWidth: 100
          },
          {
            prop: "cep",
            label: "Cep",
            minWidth: 100
          },
          {
            prop: "bairro",
            label: "Bairro",
            minWidth: 100
          },
          {
            prop: "uf",
            label: "Uf",
            minWidth: 50
          },
          {
            prop: "logradouro",
            label: "Logradouro",
            minWidth: 120
          },
          {
            prop: "complemento",
            label: "Complemento",
            minWidth: 120
          },
          {
            prop: "nfe_emitir_nota_fiscal",
            label: "Nota Fiscal Eletrônica",
            minWidth: 100
          },
          {
            prop: "optante_simples_nacional",
            label: "Optante do Simples Nacional",
            minWidth: 120
          },
          {
            prop: "codigo_cnae",
            label: "Código de Atividade - CNAE",
            minWidth: 120
          },
          {
            prop: "cod_lc116",
            label: "Código LC116 (Lei Complementar 116)",
            minWidth: 80
          },
          {
            prop: "cod_servico_municipal",
            label: "Código de Serviço no Município (em algumas cidades, repete-se o cnae)",
            minWidth: 80
          },
          {
            prop: "ir_tax_rate",
            label: "IR %",
            minWidth: 100
          },
          {
            prop: "csll_tax_rate",
            label: "CSLL %",
            minWidth: 100
          },
          {
            prop: "pis_tax_rate",
            label: "PIS %",
            minWidth: 100
          },
          {
            prop: "cofins_tax_rate",
            label: "COFINS %",
            minWidth: 100
          },
          {
            prop: "inss_tax_rate",
            label: "INSS %",
            minWidth: 100
          },
          {
            prop: "iss_tax_rate",
            label: "ISS %",
            minWidth: 100
          },
          {
            prop: "nfe_serie",
            label: "Série (Ex.: A)",
            minWidth: 120
          },
          {
            prop: "nfe_rps_atual",
            label: "Número do RPS atual (Se não usar rps coloque 1)",
            minWidth: 120
          },
          {
            prop: "nfe_lote_atual",
            label: "Número do lote atual (Se não usar rps coloque 1)",
            minWidth: 120
          }
        ],
        searchData: [],
        rowsSelected: []
      };
    },
    methods: {
      // ...mapActions("Empresa", ["listar", "deletar", "exportar"]),
      ...mapActions({
        // listar:"Empresa/listar", 
        listar:"Empresa/listarTable", 
        deletar:"Empresa/deletar", 
        exportar:"Empresa/exportar",
        limparLista:"Empresa/limparListaTable",
      }),

      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      permissoesPagina(des = 'Consultar',mod = 'empresa', contr = 'Cadastro'){
        let self = this;
        return permissoesDaPagina(self, {descricao: des, module: mod}, contr);
      }
    },
    destroyed(){
      this.limparLista();
    }
  };
</script>
<style>
  .card .card-body {
    padding: 6px 15px 6px 15px;
  }

  input::-webkit-input-placeholder {
    color: rgb(68, 68, 68) !important;
  }
</style>

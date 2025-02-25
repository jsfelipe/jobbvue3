<template>
    <div class="row">

        <div class="col-md-12">
            <card>
                <template slot="header">
                    <h4 class="card-title">Dados da Empresa</h4>
                </template>
                <div>
                    <fg-input v-model="form.id_empresa" class="col-sm-4 col-12 hide" label="id empresa" style="display:none"></fg-input>
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-2">

                            <div class="col-12">
                                <label class="col-12">Logotipo</label>
                                <!-- <img slot="image" class="card-img-top col-12" :src="linkImage"> -->
                                <img slot="image" v-if="linkImage == ''" class="card-img-top col-12" :src="$http.defaults.baseURL+'/img/no-user.png'" alt="..." />
                                <img slot="image" v-else class="card-img-top col-12" :src="linkImage" alt="..." />
                                <div class="input-group col-12 text-center">
                                    <jobb-upload-file
                                        uploadType="images"
                                        @onSuccess="setImage($event)"
                                        ref="upload" class="w-100"
                                    ></jobb-upload-file>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-10">

                            <div class="row">
                                <fg-input v-model="form.razao" class="col-sm-6 col-12 h-10" label="Razão"></fg-input>
                                <fg-input v-model="form.fantasia" class="col-sm-6 col-12" label="Fantasia"></fg-input>
                            </div>

                            <div class="row">
                                <fg-input v-model="form.sigla" class="col-sm-4 col-12" label="Sigla" length="4"></fg-input>
                                <input type="hidden" v-model="form.cnpj" v-mask="'##.###.###/####-##'">
                                <fg-input v-model="form.cnpj" class="col-sm-4 col-12" label="CNPJ" placeholder="00.000.000/0001-11"></fg-input>
                                <fg-input v-model="form.ie" class="col-sm-4 col-12" label="Inscrição Estadual"></fg-input>
                            </div>

                            <div class="row">
                                <fg-input v-model="form.im" class="col-sm-4 col-12" label="Inscrição Municipal"></fg-input>
                                <input type="hidden" v-model="form.fone" v-mask="'(##) #####-####'">
                                <input type="hidden" v-model="form.celular" v-mask="'(##) #####-####'">
                                <fg-input v-model="form.fone" class="col-sm-4 col-12" label="Telefone"></fg-input>
                                <fg-input v-model="form.celular" class="col-sm-4 col-12" label="Celular"></fg-input>
                            </div>

                            <div class="row">
                                <fg-input v-model="form.site" class="col-sm-4 col-12" label="Site"></fg-input>
                                <fg-input v-model="form.email" class="col-sm-4 col-12" label="E-mail"></fg-input>
                                <div class="col-4">
                                    <label>Sistema tributário</label>
                                    <select
                                        class="form-control"
                                        v-model="form.sistema_tributario"
                                        @change="onChangeSistemaTributario(form.sistema_tributario)"
                                    >
                                        <option value="MEI">MEI</option>
                                        <option value="SIMPLES_NACIONAL">Simples Nacional</option>
                                        <option value="LUCRO_REAL">Lucro Real</option>
                                        <option value="LUCRO_PRESUMIDO">Lucro Presumido</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row" v-for="sistemaTributacao in form.tributacao" v-bind:key="sistemaTributacao.tipo_imposto">
                                <div class="col-2 mt-4 text-bold bl-1"><b> Tributação do {{sistemaTributacao.tipo_imposto}}: </b></div>
                                <fg-input
                                    v-for="tributacao in sistemaTributacao.campos"
                                    v-bind:key="tributacao.nome_campo"
                                    v-model="tributacao.valor"
                                    class="col-sm-2 col-12"
                                    :label="tributacao.placeholder">
                                        <el-date-picker
                                            v-if="tributacao.tipo_campo == 'date'"
                                            type="date"
                                            placeholder="__"
                                            format="dd"
                                            value-format="dd"
                                            v-model="tributacao.valor">
                                        </el-date-picker>
                                </fg-input>
                            </div>

                        </div>
                    </div>
                    <hr>
                    <h5>{{ $t('padrao.endereco') }}</h5>

                    <jobb-endereco :enderecoForm="form" @getEndereco="getEndereco($event)"></jobb-endereco>


                    <hr>
                    <h5>Ativar Nota Fiscal Eletrônica? </h5>

                    <div class="row">
                        <el-switch
                            class="col-sm-12 col-xl-12 col-12"
                            aria-describedby="addon-right addon-left"
                            v-model="form.nfe_emitir_nota_fiscal"
                            active-text="Sim"
                            active-value="S"
                            inactive-text="Não"
                            inactive-value="N"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </div>

                    <div v-if="form.nfe_emitir_nota_fiscal == 'S'" class="mt-4">
                            <hr>
                            <div class="row">
                                <p class="text-danger col-12">Atenção! Caso não saiba preencher as opções abaixo, entre em contato com seu contator.</p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Optante do Simples Nacional ?</label>
                                    <el-switch
                                        class="col-sm-12 col-xl-12 col-12"
                                        aria-describedby="addon-right addon-left"
                                        v-model="form.optante_simples_nacional"
                                        active-text="Sim"
                                        active-value="S"
                                        inactive-text="Não"
                                        inactive-value="N"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949">
                                    </el-switch>
                                </div>
                                <div class="col-md-6">
                                    <label>Regime especial de tributação</label>
                                    <select class="form-control" v-model="form.regime_especial_tributacao">
                                        <option value="0">Nenhum</option>
                                        <option value="1">Microempresa Municipal</option>
                                        <option value="2">Estimativa</option>
                                        <option value="3">Sociedade de Profissionais</option>
                                        <option value="4">Cooperativa</option>
                                        <option value="5">MEI - Simples Nacional</option>
                                        <option value="6">ME EPP - Simples Nacional</option>
                                    </select>
                                </div>
                            </div>



                            <!-- <div class="row col-12 mb-2">
                                <a href="https://arquivos-jobbgestor.s3.amazonaws.com/appImgs/exemplo-cnae-fatura.png" target="_blank">Códigos de serviço (usar apenas números sem pontuações) <i class="fas fa-question-circle"></i></a>
                            </div> -->
                            <div class="row">

                                <!-- <fg-input v-model="form.razao" class="col-sm-6 col-md-3" label="Série de Recibo Provisório de Serviços (RPS)"></fg-input>
                                <fg-input v-model="form.razao" class="col-sm-6 col-md-3" label="Próximo Nº do RPS"></fg-input> -->

                                <!-- <fg-input v-model="form.codigo_cnae" class="col-md-4" label="Código de Atividade - CNAE"></fg-input>
                                <fg-input v-model="form.cod_lc116" class="col-md-4" label="Código LC116 (Lei Complementar 116)"></fg-input>
                                <fg-input v-model="form.cod_servico_municipal" class="col-md-4" label="Código de Serviço no Município (em algumas cidades, repete-se o cnae)"></fg-input> -->
                            </div>

                            <div class="row">

                                <fg-input v-model="form.ir_tax_rate" class="col-sm-6 col-md-2" label="IR %"></fg-input>
                                <fg-input v-model="form.csll_tax_rate" class="col-sm-6 col-md-2" label="CSLL %"></fg-input>
                                <fg-input v-model="form.pis_tax_rate" class="col-sm-6 col-md-2" label="PIS %"></fg-input>
                                <fg-input v-model="form.cofins_tax_rate" class="col-sm-6 col-md-2" label="COFINS %"></fg-input>
                                <fg-input v-model="form.inss_tax_rate" class="col-sm-6 col-md-2" label="INSS %"></fg-input>
                                <fg-input v-model="form.iss_tax_rate" class="col-sm-6 col-md-2" label="ISS %"></fg-input>
                            </div>

                            <div class="row">

                                <fg-input v-model="form.nfe_serie" class="col-sm-6 col-md-2" label="Série (Ex.: A)"></fg-input>
                                <fg-input v-model="form.nfe_rps_atual" class="col-sm-6 col-md-2" label="Número do RPS atual (Se não usar rps coloque 1)"></fg-input>
                                <fg-input v-model="form.nfe_lote_atual" class="col-sm-6 col-md-2" label="Número do lote atual (Se não usar rps coloque 1)"></fg-input>
                                <fg-input v-model="form.senha_certificado" class="col-sm-6 col-md-2" label="Senha certificado" maxlength="255" type="password"></fg-input>

                            </div>

                            <div class="ml-1 mr-1 mt-3 pt-3 pb-3" style="background-color:#F5F5F5">       
                                <div class="col-12 font-weight-bold">Descrição dos Serviços <a href="https://arquivos-jobb.s3.amazonaws.com/appImgs/exemplo-cnae-fatura.png" target="_blank"><i class="fas fa-question-circle"></i></a></div>
                                <auto-complete-cnae 
                                  class="col-sm-12 col-md-12"   
                                  :key="clearAutoComplete"                              
                                  @onSuccess="onSuccessAutoCompleteCnae" 
                                />                                                   
                            </div>   
                            
                            <div class="row col-12 mt-3 mb-2" v-if="editCodes">                               
                                <fg-input class="col-sm-2" label="Codigo Interno"   v-model="editCodesEnotas.codigo_interno"     placeholder="Codigo Interno"/>
                                <fg-input class="col-sm-2" label="Codigo LC116"     v-model="editCodesEnotas.codigo_lc116"   placeholder="Codigo LC116"/>
                                <fg-input class="col-sm-2" label="Codigo Municipal" v-model="editCodesEnotas.codigo_municipal"  placeholder="Codigo Municipal" />
                                <fg-input class="col-sm-2" label="Codigo CNAE"      v-model="editCodesEnotas.codigo_cnae"   placeholder="Codigo CNAE" />
                                <fg-input class="col-sm-3" label="Descrição"        v-model="editCodesEnotas.descricao"  placeholder="Descrição"/>

                                <div class="col-sm-1  mt-4">
                                    <n-button  class="btn btn-success"  @click.native="updateEditCodes" type="success">
                                        <i class="fas fa-plus mr-2"></i> 
                                        Atualizar
                                    </n-button>
                                </div>                               
                           </div>
                            
                            <div class="col-12 mt-3 mb-2" v-if="listCodesEnotas.length > 0">
                                <table class="table table-hover">
                                    <tr>
                                        <th>Codigo Interno</th>
                                        <th>Codigo LC116</th>
                                        <th>Codigo Municipal</th>
                                        <th>Codigo CNAE</th>
                                        <th colspan='2'>Descrição</th>
                                    </tr>
                                    <tr v-for="(code, index) in listCodesEnotas" :key="index">
                                        <td>{{ code.codigo_interno }}</td>
                                        <td>{{ code.codigo_lc116 }}</td>
                                        <td>{{ code.codigo_municipal }}</td>
                                        <td>{{ code.codigo_cnae }}</td>
                                        <td>{{ code.descricao }}</td>
                                        <td>
                                            <i 
                                             class="fas fa-edit mr-2 text-success p-2 rounded"
                                             style="cursor:pointer;background-color:#f5f5f5"
                                             @click="handleEditCodesCnae(code)"
                                             >                                             
                                            </i>
                                            <i 
                                             class="fas fa-trash text-danger p-2 rounded" 
                                             style="cursor:pointer;background-color:#f5f5f5"
                                             @click="handleDestroyCodesCnae(code)"
                                             >
                                            </i>
                                        </td>
                                    </tr>
                                </table>
                            </div>             

                            <div class="row mt-3">
                                <div class="col-12">
                                    <h6>Upload Certificado Digital <span style="font-size:0.9rem">(Modelo A1)</span></h6>
                                    <jobb-upload-file
                                        uploadType="file"
                                        @onSuccess="setCertificado($event)"
                                        ref="upload" class="w-100"
                                        :fileList="fileList"
                                        :showFileList="true"
                                    ></jobb-upload-file>
                                </div>
                            </div>
                    </div>
<!-- 
                    <hr>
                    <h5>Integrar com Banco Inter? </h5>

                    <div class="row">
                        <el-switch
                            class="col-sm-12 col-xl-12 col-12"
                            aria-describedby="addon-right addon-left"
                            v-model="form.integrar_inter"
                            active-text="Sim"
                            active-value="S"
                            inactive-text="Não"
                            inactive-value="N"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </div> -->

                     <div v-if="form.integrar_inter == 'S'" class="mt-4">
                           <div class="row mt-3">
                             <fg-input v-model="form.inter_client_id" class="col-md-4" label="CLIENT_ID"></fg-input>
                             <fg-input v-model="form.inter_client_secret" class="col-md-4" label="SECRET_ID"></fg-input>                            

                             <div class="col-6 mt-3">
                                 <h6 class="text-secondary">Inter API_Certificado</h6>
                                    <jobb-upload-file
                                        uploadType="file"
                                        @onSuccess="setCertificadoInter($event)"
                                        ref="upload" class="w-100"
                                        :fileList="fileListInterCert"
                                        :showFileList="true"
                                    ></jobb-upload-file>
                                </div>  

                              <div class="col-6 mt-3">
                                 <h6 class="text-secondary">Inter API_Chave</h6>
                                    <jobb-upload-file
                                        uploadType="file"
                                        @onSuccess="setKeyInter($event)"
                                        ref="upload" class="w-100"
                                        :fileList="fileListInterKey"
                                        :showFileList="true"
                                    ></jobb-upload-file>
                                </div>

                                 
                               <fg-input v-model="form.chave_pix" class="col-md-4 mt-3" label="CHAVE PIX INTER"></fg-input>                 

                                  <div class="col-md-4 col-6 mt-3">                          
                                     <jobb-select-dados-bancarios v-model="form.id_contaBancaria_fatura_boleto"></jobb-select-dados-bancarios>
                                </div>
                            </div>

                     </div>

                    <div class="d-flex justify-content-start footer-salvar">
                        <n-button class="btn btn-secondary" @click.native="$router.push({name: 'unidades.listar'})"> {{$t('padrao.voltar')}}</n-button>
                        <button v-on:click="salvarEmpresa" type="success" id="salvarEmpresa" class="btn btn-success">{{ $t('padrao.salvar') }}</button>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>
<script>
    import {Checkbox, Radio} from '@/components/index';
    import JobbUploadFile from '@/components/Jobb/Utils/UploadFile.vue';
    import {mapActions, mapState} from 'vuex';
    import JobbEndereco from '@/components/Jobb/Endereco/Endereco.vue';
    import {FormEmpresa} from './model/FormEmpresa';
    import jobbSelectDadosBancarios from 'src/components/Jobb/DadosBancarios/selectDadosBancarios.vue';
    import AutoCompleteCnae from '../../Financeiro/Faturas/AutoCompleteCnae.vue';
    import Vue from 'vue';

    export default {
        components: {
            Checkbox,
            Radio,
            JobbUploadFile,
            JobbEndereco,
            jobbSelectDadosBancarios,
            AutoCompleteCnae
        },
        computed: {
            ...mapState('Empresa', {
                listEmpresa: state => state.list
            }),
        },
        data() {
            return {
                editIndex: null,
                listCodesEnotas: [],
                editCodes:false,
                editCodesEnotas:{},
                clearAutoComplete:0,
                form: new FormEmpresa,
                radios: {
                    radio1: '1',
                    radio2: '2',
                    radio3: '2',
                    radioOn: '2',
                    radioOff: '2'
                },
                checkboxes: {
                    first: false,
                    second: false,
                    a: false,
                    b: false,
                    c: false,
                    unchecked: false,
                    checked: true,
                    disabledUnchecked: false,
                    disabledChecked: true
                },
                linkImage: '',
                fileList: [],
                fileListInterKey: [],
                fileListInterCert: []
            }
        },
        methods: {
            ...mapActions('Empresa', ['inserir', 'alterar', 'listar']),
            onSuccessAutoCompleteCnae(line) {
                this.editCodes = false
                this.clearAutoComplete += 1
                const descricao = line.descricao; // Obtém a descrição do objeto
                if (!descricao) {
                    this.$alerta("Descrição não encontrada!",'warning')            
                    return;
                }

                const codigoJaInserido = this.listCodesEnotas.some(item => item.codigo_interno == line.codigo);

                if (codigoJaInserido) {
                    this.$alerta('CNAE já inserido!', 'warning');
                    return;
                }
                
                const regex = /^(\d+)\s\|\s([\d.]+)\s-\s(.+)$/;
                const match = descricao.match(regex);

                if (match) {
                 const [_, codigo_cnae, codigo_municipal, descricao] = match;

                 this.listCodesEnotas.push({
                    codigo_interno: line.codigo,
                    codigo_lc116: codigo_municipal,
                    codigo_municipal,
                    codigo_cnae,
                    descricao
                })  
              
                } else {
                    this.$alerta("Formato da descrição api cnae inválido!",'warning')              
                }
        
            },
            handleEditCodesCnae(code) {
                this.editCodes = true           
                this.editCodesEnotas = { ...code, codigo_lc116: code.codigo_municipal }; 
                this.editIndex = this.listCodesEnotas.findIndex(item => item.codigo_interno === code.codigo_interno);        
            },
            updateEditCodes() {
                this.editCodes = false

                if (this.editIndex !== null) {
                    // Atualiza o item diretamente pelo índice
                    this.listCodesEnotas.splice(this.editIndex, 1, this.editCodesEnotas);
                    this.editIndex = null; // Limpa o índice após a edição
                } else {
                    this.$alerta("Índice não encontrado!", 'warning');
                }
             
            },
           async handleDestroyCodesCnae(code) {
                 this.editCodes = false
                 if(!code.id) return this.removeInListCodesCnae(code) 
          
                 try {
                     await Vue.prototype.$http.get(`/empresa/delete-nfe-codes?id=${code.id}`)
                     this.removeInListCodesCnae(code) 
                  } catch (error) {
                     this.$alerta(`Erro ao excluir CNAE!`,'danger')  
                     console.log(`Erro ao deletar  CNAE!`,error.data)              
                 }  
               
            },
            removeInListCodesCnae(code){
                const codesEnotas =  this.listCodesEnotas.filter(item => item.codigo_interno !== code.codigo_interno)
                this.listCodesEnotas = codesEnotas 
            },
            salvarEmpresa: function () {
                var id_empresa = this.$route.params.id;
                if (id_empresa) {
                    this.atualizarEmpresa(this.form);
                } else {
                    this.cadastrarEmpresa();
                }
            },
            setImage(response) {
                if(response.url){
                    this.linkImage = response.url;
                    this.form.logomarca = response.url;
                }
            },
            setCertificado(response) {
                this.fileList.push(response.nomeArquivo);
                this.form.arquivo_certificado = response.nomeArquivo;
            },
            setCertificadoInter(response) {
                this.fileListInterCert.push(response.nomeArquivo);
                this.form.inter_certificado = response.nomeArquivo;
            },
             setKeyInter(response) {
                this.fileListInterKey.push(response.nomeArquivo);
                this.form.inter_chave = response.nomeArquivo;
            },
            cadastrarEmpresa: function () {
                const self = this;
                let dadosJson = JSON.parse(JSON.stringify(this.form));

                // ENCODE TRIBUTACAO
                dadosJson.tributacao = dadosJson.tributacao.map(function(tributacao){
                    return {
                        tipo_imposto: tributacao.tipo_imposto,
                        aliquota: tributacao.campos.find((campo) => { return campo.nome_campo == 'aliquota' }).valor,
                        dia_lancamento_imposto: tributacao.campos.find((campo) => { return campo.nome_campo == 'dia_lancamento_imposto' }).valor
                    };
                });

                dadosJson.id_plano_jobbgestor = this.$store.state.Perfil.id_plano_jobbgestor

                if(dadosJson.nfe_emitir_nota_fiscal === 'S') {
                    dadosJson.nfe_listCodesEnotas = this.listCodesEnotas               
                }             

                this.inserir(dadosJson).then(async response => {
                    self.$alerta(response.msg, "success");

                    if(dadosJson.integrar_inter === 'S') {                    
                        try {
                            await Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/webhook-create-link`,{
                                    webhook: 'inter'
                            },{
                                headers: {'unidade': response.id_empresa}
                            })

                            self.$router.push({name: 'unidades.listar'})
                        
                        } catch (error) {
                            this.$alerta(`Erro ao criar webhook inter! error: ${error.data}`,'danger')  
                            console.log(error.data)               
                            return
                        }                   
                    }
               
                    self.$router.push({name: 'unidades.listar'})
                }, error => {
                    if (error.data) {                      
                        self.$alerta(`${error.data.msg}: ${error.data.msgDetails}`, "danger");
                    }else{
                        console.log('segundo')
                        self.$alerta("Erro ao inserir Empresa!", "danger");
                    }
                });
            },
            getEndereco(enderecoForm) {
                this.form = enderecoForm;
            },
            atualizarEmpresa: function (dadosJson) {  
                let self = this;
           
                if(dadosJson.nfe_emitir_nota_fiscal === 'S') {
                    dadosJson.nfe_listCodesEnotas = this.listCodesEnotas               
                }   
                         
                this.alterar(dadosJson).then(async response => {
                    self.$alerta(response, "success");

                 if(dadosJson.integrar_inter === 'S') {                    
                    try {
                        await Vue.prototype.$http.post(`${process.env.VUE_APP_API_V2}/webhook-create-link`,{
                                 webhook: 'inter'
                          },{
                            headers: {'unidade': dadosJson.id_empresa}
                         })

                          self.$router.push({name: 'unidades.listar'})
                     
                    } catch (error) {
                        this.$alerta(`Erro ao criar webhook inter! error: ${error.data}`,'danger')  
                        console.log(error.data)               
                        return
                    }                   
                 }

                    self.$router.push({name: 'unidades.listar'})
                }, error => {
                    if (error.data) {
                        self.$alerta(error.data.msg, "danger");
                    }else{
                        self.$alerta("Erro ao alterar dados Empresa!", "danger");
                    }
                });
            },
            onChangeSistemaTributario(sistema_tributario, arrTributacao = []){
                this.form.tributacao = [];
                var valorAliquota = '';
                var diaLancamento = '';
                var tributo = '';
                switch(sistema_tributario){
                    case "MEI":
                        tributo = arrTributacao.find((tributo) => { return tributo.tipo_imposto == 'SIMPLES_NACIONAL' });
                        if(arrTributacao.find((tributo) => { return tributo.tipo_imposto == 'SIMPLES_NACIONAL' }) != undefined){
                            valorAliquota = tributo['aliquota'];
                            diaLancamento = tributo['dia_lancamento'];
                        }

                        this.form.tributacao.push({
                            tipo_imposto: 'SIMPLES_NACIONAL',
                            campos: [
                                {
                                    nome_campo: 'aliquota',
                                    placeholder: 'Aliquota (%)',
                                    tipo_campo: 'texto',
                                    valor: valorAliquota
                                },
                                {
                                    nome_campo: 'dia_lancamento_imposto',
                                    placeholder: 'Dia do lançamento no mês',
                                    tipo_campo: 'date',
                                    valor: diaLancamento
                                }
                            ]
                        });
                    break;
                    case "SIMPLES_NACIONAL":
                        tributo = arrTributacao.find((tributo) => { return tributo.tipo_imposto == 'SIMPLES_NACIONAL' });
                        if(arrTributacao.find((tributo) => { return tributo.tipo_imposto == 'SIMPLES_NACIONAL' }) != undefined){
                            valorAliquota = tributo['aliquota'];
                            diaLancamento = tributo['dia_lancamento'];
                        }

                        this.form.tributacao.push({
                            tipo_imposto: 'SIMPLES_NACIONAL',
                            campos: [
                                {
                                    nome_campo: 'aliquota',
                                    placeholder: 'Aliquota (%)',
                                    tipo_campo: 'texto',
                                    valor: valorAliquota
                                },
                                {
                                    nome_campo: 'dia_lancamento_imposto',
                                    placeholder: 'Dia do lançamento no mês',
                                    tipo_campo: 'date',
                                    valor: diaLancamento
                                }
                            ]
                        });
                    break;
                    case "LUCRO_REAL":
                    break;
                    case "LUCRO_PRESUMIDO":
                    break;
                }
            }

        },
        mounted() {
            const self = this;
            this.listar({}).then(() => {

                var id_empresa = self.$route.params.id;
                if (id_empresa) {
                    var listaEmpresas = Object.keys(self.$store.getters['Empresa/listaEmpresas'].data).map(i => self.$store.getters['Empresa/listaEmpresas'].data[i]);
                    let indexChange = listaEmpresas.findIndex((tableRow) => tableRow.id_empresa == id_empresa);
                    let dadosEmpresa = self.$store.getters['Empresa/listaEmpresas'].data[indexChange];

                    this.listCodesEnotas = dadosEmpresa.nfe_listCodesEnotas      
                   
                    this.fileList.push({
                        name: dadosEmpresa.arquivo_certificado,               
                    })

                    if(dadosEmpresa.inter_certificado) {
                        this.fileListInterCert.push({
                            name: dadosEmpresa.inter_certificado,               
                       })
                    }

                     if(dadosEmpresa.inter_chave) {
                        this.fileListInterKey.push({
                            name: dadosEmpresa.inter_chave,               
                       })
                    }                   
                                
                    self.form = new FormEmpresa(
                        dadosEmpresa.id_empresa,
                        dadosEmpresa.razao,
                        dadosEmpresa.fantasia,
                        dadosEmpresa.sigla,
                        dadosEmpresa.cnpj,
                        dadosEmpresa.ie,
                        dadosEmpresa.im,
                        dadosEmpresa.fone,
                        dadosEmpresa.celular,
                        dadosEmpresa.site,
                        dadosEmpresa.email,
                        dadosEmpresa.logradouro,
                        dadosEmpresa.numero,
                        dadosEmpresa.complemento,
                        dadosEmpresa.cep,
                        dadosEmpresa.bairro,
                        dadosEmpresa.cidade,
                        dadosEmpresa.uf,
                        dadosEmpresa.logomarca,
                        dadosEmpresa.sistema_tributario,
                        dadosEmpresa.tributacao,
                        dadosEmpresa.nfe_emitir_nota_fiscal,
                        dadosEmpresa.optante_simples_nacional,
                        dadosEmpresa.regime_especial_tributacao,
                        dadosEmpresa.iss_tax_rate,
                        dadosEmpresa.pis_tax_rate,
                        dadosEmpresa.cofins_tax_rate,
                        dadosEmpresa.inss_tax_rate,
                        dadosEmpresa.ir_tax_rate,
                        dadosEmpresa.csll_tax_rate,
                        dadosEmpresa.cod_lc116,
                        dadosEmpresa.codigo_cnae,
                        dadosEmpresa.cod_servico_municipal,
                        dadosEmpresa.arquivo_certificado,
                        dadosEmpresa.senha_certificado,
                        dadosEmpresa.nfe_serie,
                        dadosEmpresa.nfe_rps_atual,
                        dadosEmpresa.nfe_lote_atual,
                        dadosEmpresa.inter_certificado,
                        dadosEmpresa.inter_chave,
                        dadosEmpresa.integrar_inter,
                        dadosEmpresa.inter_client_id,
                        dadosEmpresa.inter_client_secret,
                        dadosEmpresa.chave_pix,
                        dadosEmpresa.id_contaBancaria_fatura_boleto,
                    );
            
                    // console.log(self.form, dadosEmpresa);
                    // DECODE TRIBUTACAO
                    this.onChangeSistemaTributario(dadosEmpresa.sistema_tributario, dadosEmpresa.tributacao);

                    // logomarca
                    if (dadosEmpresa.logomarca !== null && dadosEmpresa.logomarca != '') {
                        //self.$refs.upload.setImage(dadosEmpresa.logomarca);
                        self.linkImage = (dadosEmpresa.logomarca);
                        //console.log(dadosEmpresa);
                    }

                }

            }, () => {
                self.$alerta("Erro ao listar dados Empresa!", "danger");
            });

        }
    }

</script>

export const FormEmpresa = class {
    constructor(id_empresa= '',razao= '',fantasia= '',sigla= '',cnpj= '',inscricao_estadual= '',inscricao_municipal= '',fone= '',celular= '',
                   site= '',email= '',logradouro= '',numero= '',complemento= '',cep= '',bairro= '',cidade= '',uf= '',logomarca= '',sistema_tributario= null,
                   tributacao= [],nfe_emitir_nota_fiscal= null,optante_simples_nacional= null,regime_especial_tributacao= null,iss_tax_rate= null,
                   pis_tax_rate= null,cofins_tax_rate= null,inss_tax_rate= null,ir_tax_rate= null,csll_tax_rate= null,cod_lc116= null,codigo_cnae= null,
                   cod_servico_municipal= null,arquivo_certificado= null,senha_certificado=null, nfe_serie= null,nfe_rps_atual= null,nfe_lote_atual= null,
                   inter_certificado = null, inter_chave = null, integrar_inter = null, inter_client_id = null, inter_client_secret= null,
                   chave_pix = null, id_contaBancaria_fatura_boleto = ''
         ){
        this.id_empresa= id_empresa;
        this.razao= razao;
        this.fantasia= fantasia;
        this.sigla= sigla;
        this.cnpj= cnpj;
        this.ie= inscricao_estadual;
        this.im= inscricao_municipal;
        this.fone= fone;
        this.celular= celular;
        this.site= site;
        this.email= email;
        this.logradouro= logradouro;
        this.numero= numero;
        this.complemento= complemento;
        this.cep= cep;
        this.bairro= bairro;
        this.cidade= cidade;
        this.uf= uf;
        this.logomarca= logomarca;
        this.sistema_tributario= sistema_tributario;
        this.tributacao= tributacao;
        this.nfe_emitir_nota_fiscal= nfe_emitir_nota_fiscal;
        this.optante_simples_nacional= optante_simples_nacional;
        this.regime_especial_tributacao= regime_especial_tributacao;
        this.iss_tax_rate= iss_tax_rate;
        this.pis_tax_rate= pis_tax_rate;
        this.cofins_tax_rate= cofins_tax_rate;
        this.inss_tax_rate= inss_tax_rate;
        this.ir_tax_rate= ir_tax_rate;
        this.csll_tax_rate= csll_tax_rate;
        this.cod_lc116= cod_lc116;
        this.codigo_cnae= codigo_cnae;
        this.cod_servico_municipal= cod_servico_municipal;
        this.arquivo_certificado= arquivo_certificado;
        this.senha_certificado= senha_certificado;
        this.nfe_serie= nfe_serie;
        this.nfe_rps_atual= nfe_rps_atual;
        this.nfe_lote_atual= nfe_lote_atual;
        this.inter_certificado = inter_certificado;
        this.inter_chave = inter_chave;
        this.integrar_inter = integrar_inter
        this.inter_client_id = inter_client_id,
        this.inter_client_secret = inter_client_secret,
        this.chave_pix = chave_pix
        this.id_contaBancaria_fatura_boleto = id_contaBancaria_fatura_boleto
    }
};

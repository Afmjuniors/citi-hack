export interface HeaderRemessa {
    "TIPO_DE_REGISTRO": string,
    "OPERACAO": string,
    "LITERAL_DE_REMESSA": string,
    "CODIGO_DO_SERVICO": string,
    "LITERAL_DE_SERVICO": string,
    "ISPB_PARTICIPANTE": string,
    "TIPO_PESSOA_RECEBEDOR": string,
    "CPF_CNPJ": string,
    "AGENCIA": string,
    "CONTA": string,
    "TIPO_CONTA": string,
    "CHAVE_PIX": string,
    "DATA_DE_GERACAO": string,
    "NUMERO_SEQUENCIAL_DA_REMESSA": string,
    "VERSAO_DO_ARQUIVO": string,
    "NUMERO_SEQUENCIAL_DO_REGISTRO": string

}
export interface DetalheRemessa {
    "TIPO_DE_REGISTRO": string,
    "IDENTIFICADOR": string,
    "TIPO_DE_PESSOA_RECEBEDOR": string,
    "CPF_CNPJ": string,
    "AGENCIA": string,
    "CONTA": string,
    "TIPO": string,
    "CHAVE_PIX": string,
    "TIPO_COBRANCA":string,
    "COD_DE_OCORRENCIA": string,
    "TIMESTAP_EXPIRACAO": string | null,
    "DATA_DE_VENCIMENTO": string,
    "VALIDADE_APOS_VECENCIMENTO": string,
    "VALOR_ORIGINAL": number,
    "TIPO_DE_PESSOA_DEVEDOR": string,
    "CPF_CNPJ_DEVEDOR": string,
    "NOME_DEVEDOR":string,
    "SOLICITACAO_PAGADOR": string | null,
    "NUMERO_SEQUENCIAL": string
}

export interface RegistroDetalheInfoAdi{
        "TIPO_DE_REGISTRO": string, 
        "IDENTIFICADOR": string,
        "LISTA":{
            "NOME":string,
            "VALOR":number
        }[],
        "NUMERO_SEQUENCIAL":string
}

export interface DadosComVencimentoRemessa{
    "TIPO_DE_REGISTRO": string,
    "IDENTIFICADOR": string,
    "EMAIL_DO_DEVEDOR":string,
    "LOGRADOURO_DO_DEVEDOR":string,
    "CIDADE_DO_DEVEDOR":string,
    "ESTADO_DO_DEVEDOR":string,
    "CEP_DO_DEVEDOR":string,
    "MODALIDADE_JUROS":number,
    "VALOR_MULTA":number,
    "NUMERO_SEQUENCIAL_DO_REGISTRO": string
}

export interface TrailerRemessa{
    "TIPO_DE_REGISTRO": string,
    "VALOR": number,
    "QTDE_DE_REGISTROS": string,
    "NUMERO_SEQUENCIAL": string
}

export interface RegistroRemessa {
    HEADER:HeaderRemessa,
    DETALHE:DetalheRemessa[],
    REGISTRO_DETALHE_INFORMCOES_ADICIONAIS:RegistroDetalheInfoAdi[],
    DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO:DadosComVencimentoRemessa[],
    TRAILER:TrailerRemessa
}

export interface HeaderRetorno{
"TIPO_DE_REGISTRO":string,
"CODIGO_DE_RETORNO":string,
"LITERAL_DE_RETORNO":string,
"CODIGO_DO_SERVIÇO":string,
"LITERAL_DE_SERVICO":string,
"ISPB_PARTICIPANTE":string,
"TIPO_DE_PESSOA_RECEBEDOR":string,
"CPF_CNPJ":string,
"AGENCIA":string,
"CONTA":string,
"TIPO_DE_CONTA":string,
"CHAVE_Pix":string,
"DATA_DE_GERACAO":string,
"CODIGOS_DE_ERROR":string[],
"VERSAO_DO_ARQUIVO":string,
"NUMERO_SEQUENCIAL_DO_REGISTRO":string
}
export interface DetalheRetorno{
    "TIPO_DE_REGISTRO":"",
    "TIPO_DE_PESSOA_RECEBEDOR":"",
    "CPF_CNPJ":"",
    "TIPO_DE_COBRANCA":"",
    "COD_DO_MOVIMENTO":"",

}

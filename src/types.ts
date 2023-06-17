export interface Header {
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
export interface Detalhe {
    "TIPO_DE_REGISTRO": string,
    "TIPO_DE_PESSOA_RECEBEDOR": string,
    "CPF_CNPJ": string,
    "CHAVE_PIX": string,
    "TIPO_COBRANCA": string,
    "COD_DE_OCORRENCIA": string,
    "NUMERO_SEQUENCIAL": string
}

export interface DadosComVencimento{
    "TIPO_DE_REGISTRO": string,
    "NUMERO_SEQUENCIAL_DO_REGISTRO": string
}
export interface Trailer{
    "TIPO_DE_REGISTRO": string,
    "VALOR": string,
    "QTDE_DE_REGISTROS": string,
    "NUMERO_SEQUENCIAL": string
}

export interface Registro {
    HEADER:Header,
    DETALHE:Detalhe,
    DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO:DadosComVencimento,
    TRAILER:Trailer
}

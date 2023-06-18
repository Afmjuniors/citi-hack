export class Retorno{
    constructor(
        private TIPO_DE_REGISTRO:string,
        private CODIGO_DE_RETORNO:string,
        private LITERAL_DE_RETORNO:string,
        private CODIGO_DO_SERVIÇO:string,
        private LITERAL_DE_SERVICO:string,
        private ISPB_PARTICIPANTE:string,
        private TIPO_DE_PESSOA_RECEBEDOR:string,
        private CPF_CNPJ:string,
        private AGENCIA:string,
        private CONTA:string,
        private TIPO_DE_CONTA:string,
        private CHAVE_Pix:string,
        private DATA_DE_GERACAO:string,
        private CODIGOS_DE_ERROR:string[],
        private VERSAO_DO_ARQUIVO:string,
        private NUMERO_SEQUENCIAL_DO_REGISTRO:string
    )
{}
}
import { BadRequestError } from "../error/BadRequestError";
import { DadosComVencimentoRemessa, DetalheRemessa, HeaderRemessa, RegistroDetalheInfoAdi, RegistroRemessa, TrailerRemessa } from "../types";

export class RemessaDTO {
    public validationHeader = (
        TIPO_DE_REGISTRO: unknown,
        OPERACAO: unknown,
        LITERAL_DE_REMESSA: unknown,
        CODIGO_DO_SERVICO: unknown,
        LITERAL_DE_SERVICO: unknown,
        ISPB_PARTICIPANTE: unknown,
        TIPO_PESSOA_RECEBEDOR: unknown,
        CPF_CNPJ: unknown,
        AGENCIA: unknown,
        CONTA: unknown,
        TIPO_CONTA: unknown,
        CHAVE_PIX: unknown,
        DATA_DE_GERACAO: unknown,
        NUMERO_SEQUENCIAL_DA_REMESSA: unknown,
        VERSAO_DO_ARQUIVO: unknown,
        NUMERO_SEQUENCIAL_DO_REGISTRO: unknown
    ): HeaderRemessa => {
        if (typeof NUMERO_SEQUENCIAL_DO_REGISTRO !== "string") {
            throw new BadRequestError("Numero sequencial do registro no Header tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Header tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "0") {
            throw new BadRequestError("Tipo de registro no Header deve ser 0 no arquivo de remessa ")
        }
        if (typeof OPERACAO !== "string") {
            throw new BadRequestError("Operação no Header tem que ser uma 'string' ")
        }
        if (OPERACAO !== "1") {
            throw new BadRequestError("Operação deve ser '1' no header")
        }
        if (typeof LITERAL_DE_REMESSA !== "string") {
            throw new BadRequestError("Literal de  no Header tem que ser uma 'string' ")
        }
        if (LITERAL_DE_REMESSA.toLocaleLowerCase() !== "remessa") {
            throw new BadRequestError("Literal de remessa deve ser remessa no arquivo de remessa ")
        }

        if (typeof CODIGO_DO_SERVICO !== "string") {
            throw new BadRequestError("Codigo de serviço no Header tem que ser uma 'string' ")
        }
        if (CODIGO_DO_SERVICO !== "02") {
            throw new BadRequestError("Codigo de serviço deve ser '02 no arquivo de remessa"  )
        }

        if (typeof LITERAL_DE_SERVICO !== "string") {
            throw new BadRequestError("Literal de serviço no Header tem que ser uma 'string' ")
        }
        if (LITERAL_DE_SERVICO.toLocaleLowerCase() !== 'pix') {
            throw new BadRequestError("Literal de serviço deve ser 'pix' no arquivo de remessa ")
        }

        if (typeof ISPB_PARTICIPANTE !== "string") {
            throw new BadRequestError("ISPB Participante no Header tem que ser uma 'string' ")
        }
        if (typeof TIPO_PESSOA_RECEBEDOR !== "string") {
            throw new BadRequestError("Tipo de pessoa recebedor no Header tem que ser uma 'string' ")
        }
        if (typeof CPF_CNPJ !== "string") {
            throw new BadRequestError("CPF/CNPJ no Header tem que ser uma 'string' ")
        }
        if (typeof AGENCIA !== "string") {
            throw new BadRequestError("Agencia no Header tem que ser uma 'string' ")
        }
        if (typeof CONTA !== "string") {
            throw new BadRequestError("Conta no Header tem que ser uma 'string' ")
        }
        if (typeof TIPO_CONTA !== "string") {
            throw new BadRequestError("Tipo de conta no Header tem que ser uma 'string' ")
        }
        if (typeof CHAVE_PIX !== "string") {
            throw new BadRequestError("Chave pix no Header tem que ser uma 'string' ")
        }
        if (typeof DATA_DE_GERACAO !== "string") {
            throw new BadRequestError("Data de geração no Header tem que ser uma 'string' ")
        }
        if (typeof NUMERO_SEQUENCIAL_DA_REMESSA !== "string") {
            throw new BadRequestError("Numero sequecial de remessa no Header tem que ser uma 'string' ")
        }
        if (typeof VERSAO_DO_ARQUIVO !== "string") {
            throw new BadRequestError("Versão do arquivo no Header tem que ser uma 'string' ")
        }


        return {
            TIPO_DE_REGISTRO,
            OPERACAO,
            LITERAL_DE_REMESSA,
            CODIGO_DO_SERVICO,
            LITERAL_DE_SERVICO,
            ISPB_PARTICIPANTE,
            TIPO_PESSOA_RECEBEDOR,
            CPF_CNPJ,
            AGENCIA,
            CONTA,
            TIPO_CONTA,
            CHAVE_PIX,
            DATA_DE_GERACAO,
            NUMERO_SEQUENCIAL_DA_REMESSA,
            VERSAO_DO_ARQUIVO,
            NUMERO_SEQUENCIAL_DO_REGISTRO

        }

    }
    public validationDetalhe = (
        TIPO_DE_REGISTRO: unknown,
        IDENTIFICADOR: unknown,
        TIPO_DE_PESSOA_RECEBEDOR: unknown,
        CPF_CNPJ: unknown,
        AGENCIA: unknown,
        CONTA: unknown,
        TIPO: unknown,
        CHAVE_PIX: unknown,
        TIPO_COBRANCA: unknown,
        COD_DE_OCORRENCIA: unknown,
        TIMESTAP_EXPIRACAO: unknown,
        DATA_DE_VENCIMENTO: unknown,
        VALIDADE_APOS_VECENCIMENTO: unknown,
        VALOR_ORIGINAL: unknown,
        TIPO_DE_PESSOA_DEVEDOR: unknown,
        CPF_CNPJ_DEVEDOR: unknown,
        NOME_DEVEDOR: unknown,
        SOLICITACAO_PAGADOR: unknown,
        NUMERO_SEQUENCIAL: unknown
    ): DetalheRemessa => {

        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero sequencial no Detalhe tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Detalhe tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "1") {
            throw new BadRequestError("Tipo de registro no Detalhe deve ser 1 no arquivo de remessa ")
        }
        if (typeof IDENTIFICADOR !== "string") {
            throw new BadRequestError("Identificador no Detalhe tem que ser uma 'string' ")
        }
        if (typeof TIPO_DE_PESSOA_RECEBEDOR !== "string") {
            throw new BadRequestError("Tipo de pessoa recebedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof CPF_CNPJ !== "string") {
            throw new BadRequestError("CPF/CNPJ no Detalhe tem que ser uma 'string' ")
        }
        if (typeof AGENCIA !== "string") {
            throw new BadRequestError("Agencia no Detalhe tem que ser uma 'string' ")
        }
        if (typeof CONTA !== "string") {
            throw new BadRequestError("Conta no Detalhe tem que ser uma 'string' ")
        }
        if (typeof TIPO !== "string") {
            throw new BadRequestError("Tipo no Detalhe tem que ser uma 'string' ")
        }
        if (typeof CHAVE_PIX !== "string") {
            throw new BadRequestError("Chave pix no Detalhe tem que ser uma 'string' ")
        }

        if (typeof TIPO_COBRANCA !== "string") {
            throw new BadRequestError("Tipo de cobrança no Detalhe tem que ser uma 'string' ")
        }
        if (typeof COD_DE_OCORRENCIA !== "string") {
            throw new BadRequestError("Codigo de ocorrencia no Detalhe tem que ser uma 'string' ")
        }

        if (typeof TIMESTAP_EXPIRACAO !== "string" && TIMESTAP_EXPIRACAO !== null) {
            throw new BadRequestError("Timestamp tem que ser uma 'string' ou 'null'")
        }
        if (typeof DATA_DE_VENCIMENTO !== "string") {
            throw new BadRequestError("Data de vencimento no Detalhe tem que ser uma 'string' ")
        }
        if (typeof VALIDADE_APOS_VECENCIMENTO !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ")
        }
        if (typeof VALOR_ORIGINAL !== "number") {
            throw new BadRequestError("Valor Original no Detalhe tem que ser uma 'number' ")
        }
        if (typeof TIPO_DE_PESSOA_DEVEDOR !== "string") {
            throw new BadRequestError("Tipo de pessoa devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof CPF_CNPJ_DEVEDOR !== "string") {
            throw new BadRequestError("CPF ou CNPJ do devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof NOME_DEVEDOR !== "string") {
            throw new BadRequestError("Nome do devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof SOLICITACAO_PAGADOR !== "string" && SOLICITACAO_PAGADOR !== null) {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }



        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero sequencial no Detalhe tem que ser uma 'string' ")
        }

        return {
            TIPO_DE_REGISTRO,
            IDENTIFICADOR,
            TIPO_DE_PESSOA_RECEBEDOR,
            CPF_CNPJ,
            AGENCIA,
            CONTA,
            TIPO,
            CHAVE_PIX,
            TIPO_COBRANCA,
            COD_DE_OCORRENCIA,
            TIMESTAP_EXPIRACAO,
            DATA_DE_VENCIMENTO,
            VALIDADE_APOS_VECENCIMENTO,
            VALOR_ORIGINAL,
            TIPO_DE_PESSOA_DEVEDOR,
            CPF_CNPJ_DEVEDOR,
            NOME_DEVEDOR,
            SOLICITACAO_PAGADOR,
            NUMERO_SEQUENCIAL

        }
    }

    public validationRegistroDetalhesInfoAdi= (
        TIPO_DE_REGISTRO: unknown, 
        IDENTIFICADOR: unknown,
        LISTA:{
            NOME:string,
            VALOR:string
        }[],
        NUMERO_SEQUENCIAL:unknown
    ):RegistroDetalheInfoAdi=>{
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Informações adcionais tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "2") {
            throw new BadRequestError("Tipo de registro no Informações adcionai deve ser 2 no arquivo de remessa ")
        }
        if (typeof IDENTIFICADOR !== "string") {
            throw new BadRequestError("Identificador no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero de sequencia no Informações adcionais tem que ser uma 'string' ")

        }
        return{
            TIPO_DE_REGISTRO,
            IDENTIFICADOR,
            LISTA,
            NUMERO_SEQUENCIAL
        }
    }

    public validationDadosComVencimento = (
        TIPO_DE_REGISTRO: unknown,
        IDENTIFICADOR: unknown,
        EMAIL_DO_DEVEDOR:unknown,
        LOGRADOURO_DO_DEVEDOR:unknown,
        CIDADE_DO_DEVEDOR:unknown,
        ESTADO_DO_DEVEDOR:unknown,
        CEP_DO_DEVEDOR:unknown,
        MODALIDADE_JUROS:unknown,
        VALOR_MULTA:unknown,
        NUMERO_SEQUENCIAL_DO_REGISTRO: unknown
    ): DadosComVencimentoRemessa => {

        if (typeof NUMERO_SEQUENCIAL_DO_REGISTRO !== "string") {
            throw new BadRequestError("Numero sequencial do registro recebedor no Dados especificos de cobrança com vencimento tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "3") {
            throw new BadRequestError("Tipo de registro no Dados especificos de cobrança com vencimento deve ser 3 no arquivo de remessa ")
        }
        if (typeof IDENTIFICADOR !== "string") {
            throw new BadRequestError("Identificador no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof EMAIL_DO_DEVEDOR !== "string") {
            throw new BadRequestError("Email do devedor no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof LOGRADOURO_DO_DEVEDOR !== "string") {
            throw new BadRequestError("Logradouro do devedor no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof CIDADE_DO_DEVEDOR !== "string") {
            throw new BadRequestError("Cidade do devedor no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof ESTADO_DO_DEVEDOR !== "string") {
            throw new BadRequestError("Estado do devedor no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof CEP_DO_DEVEDOR !== "string") {
            throw new BadRequestError("CEP do devedor no Dados especificos de cobrança com vencimento tem que ser uma 'string' ")

        }
        if (typeof MODALIDADE_JUROS !== "number") {
            throw new BadRequestError("Modalidade de Juros no Dados especificos de cobrança com vencimento tem que ser uma 'number' ")

        }
        if (typeof VALOR_MULTA !== "number") {
            throw new BadRequestError("Valor da multa  no Dados especificos de cobrança com vencimento tem que ser uma 'number' ")

        }


        return {
            TIPO_DE_REGISTRO,
            IDENTIFICADOR,
            EMAIL_DO_DEVEDOR,
            LOGRADOURO_DO_DEVEDOR,
            CIDADE_DO_DEVEDOR,
            ESTADO_DO_DEVEDOR,
            CEP_DO_DEVEDOR,
            MODALIDADE_JUROS,
            VALOR_MULTA,
            NUMERO_SEQUENCIAL_DO_REGISTRO
        }
    }
    public validationTrailer = (
        TIPO_DE_REGISTRO: unknown,
        VALOR: unknown,
        QTDE_DE_REGISTROS: unknown,
        NUMERO_SEQUENCIAL: unknown
    ): TrailerRemessa => {
        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero sequencial do registro recebedor no Trailer tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Trailer tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "9") {
            throw new BadRequestError("Tipo de registro no Trailer deve ser 9 no arquivo de remessa ")
        }
        if (typeof VALOR !== "number") {
            throw new BadRequestError("Valor no Trailer tem que ser uma 'number' ")
        }
        if (typeof QTDE_DE_REGISTROS !== "string") {
            throw new BadRequestError("Qauntidade de registro do registro recebedor no Trailer tem que ser uma 'string' ")
        }


        return {
            TIPO_DE_REGISTRO,
            VALOR,
            QTDE_DE_REGISTROS,
            NUMERO_SEQUENCIAL
        }
    }


}
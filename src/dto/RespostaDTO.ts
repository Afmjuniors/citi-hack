import { BadRequestError } from "../error/BadRequestError"
import { DetalheRetorno, EMV, HeaderRetorno, InfoAdicionalRetorno, TrailerRemessa, TrailerRetorno } from "../types"

export class RespostaDTO {

    public validationHeader = (
        TIPO_DE_REGISTRO: unknown,
        CODIGO_DE_RETORNO: unknown,
        LITERAL_DE_RETORNO: unknown,
        CODIGO_DO_SERVICO: unknown,
        LITERAL_DE_SERVICO: unknown,
        ISPB_PARTICIPANTE: unknown,
        TIPO_DE_PESSOA_RECEBEDOR: unknown,
        CPF_CNPJ: unknown,
        AGENCIA: unknown,
        CONTA: unknown,
        TIPO_CONTA: unknown,
        CHAVE_PIX: unknown,
        DATA_DE_GERACAO: unknown,
        CODIGO_DO_CONVENIO: unknown,
        EXCLULSIVO_PSP_RECEBEDOR: unknown,
        NOME_DO_RECEBEDOR: unknown,
        CODIGOS_DE_ERROR: unknown,
        BRANCOS: unknown,
        NUMERO_SEQUENCIAL_DO_RETORNO: unknown,
        VERSAO_DO_ARQUIVO: unknown,
        NUMERO_SEQUENCIASL_DO_REGISTRO: unknown
    ): HeaderRetorno => {
        if (typeof NUMERO_SEQUENCIASL_DO_REGISTRO !== "string") {
            throw new BadRequestError("Numero sequencial do registro no Header tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Header tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "0") {
            throw new BadRequestError("Tipo de registro no Header deve ser 0 no arquivo de retorno ")
        }
        if (typeof CODIGO_DE_RETORNO !== "string") {
            throw new BadRequestError("Codigo de retorno no Header tem que ser uma 'string' ")
        }
        if (CODIGO_DE_RETORNO !== "2") {
            throw new BadRequestError("Codigo de retorno deve ser '2' no header")
        }
        if (typeof LITERAL_DE_RETORNO !== "string") {
            throw new BadRequestError("Literal de retorno  no Header tem que ser uma 'string' ")
        }
        if (LITERAL_DE_RETORNO.toLocaleLowerCase() !== "retorno") {
            throw new BadRequestError("Literal de retorno  deve ser retorno no arquivo de retorno ")
        }

        if (typeof CODIGO_DO_SERVICO !== "string") {
            throw new BadRequestError("Codigo de serviço no Header tem que ser uma 'string' ")
        }
        if (CODIGO_DO_SERVICO !== "02") {
            throw new BadRequestError("Codigo de serviço deve ser '02 no arquivo de retorno")
        }

        if (typeof LITERAL_DE_SERVICO !== "string") {
            throw new BadRequestError("Literal de serviço no Header tem que ser uma 'string' ")
        }
        if (LITERAL_DE_SERVICO.toLocaleLowerCase() !== 'pix') {
            throw new BadRequestError("Literal de serviço deve ser 'pix' no arquivo de retorno ")
        }

        if (typeof ISPB_PARTICIPANTE !== "string") {
            throw new BadRequestError("ISPB Participante no Header tem que ser uma 'string' ")
        }
        if (typeof LITERAL_DE_RETORNO !== "string") {
            throw new BadRequestError("Tipo de pessoa recebedor no Header tem que ser uma 'string' ")
        }
        if (typeof TIPO_DE_PESSOA_RECEBEDOR !== "string") {
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
        if (typeof CODIGO_DO_CONVENIO !== "string") {
            throw new BadRequestError("Codigo do convenio no Header tem que ser uma 'string' ")
        }
        if (typeof EXCLULSIVO_PSP_RECEBEDOR !== "string") {
            throw new BadRequestError("Exclusivo PSP do recebedor no Header tem que ser uma 'string' ")
        }
        if (typeof NOME_DO_RECEBEDOR !== "string") {
            throw new BadRequestError("Nome do recebedor no Header tem que ser uma 'string' ")
        }
        if (!Array.isArray(CODIGOS_DE_ERROR) || !CODIGOS_DE_ERROR.every((code) => typeof code === "string")) {
            throw new BadRequestError("CODIGOS_DE_ERROR deve ser um array de strings");
        }
        if (typeof BRANCOS !== "string") {
            throw new BadRequestError("Bancos de retorno no Header tem que ser uma 'string' ")
        }
        if (typeof NUMERO_SEQUENCIAL_DO_RETORNO !== "string") {
            throw new BadRequestError("Numero sequecial de retorno no Header tem que ser uma 'string' ")
        }
        if (typeof VERSAO_DO_ARQUIVO !== "string") {
            throw new BadRequestError("Versão do arquivo no Header tem que ser uma 'string' ")
        }


        return {
            TIPO_DE_REGISTRO,
            CODIGO_DE_RETORNO,
            LITERAL_DE_RETORNO,
            CODIGO_DO_SERVICO,
            LITERAL_DE_SERVICO,
            ISPB_PARTICIPANTE,
            TIPO_DE_PESSOA_RECEBEDOR,
            CPF_CNPJ,
            AGENCIA,
            CONTA,
            TIPO_CONTA,
            CHAVE_PIX,
            DATA_DE_GERACAO,
            CODIGO_DO_CONVENIO,
            EXCLULSIVO_PSP_RECEBEDOR,
            NOME_DO_RECEBEDOR,
            CODIGOS_DE_ERROR,
            BRANCOS,
            NUMERO_SEQUENCIAL_DO_RETORNO,
            VERSAO_DO_ARQUIVO,
            NUMERO_SEQUENCIASL_DO_REGISTRO
        }

    }

    public validationRegInfoAdiRetorno = (
        InfoAdicionalRetorno: InfoAdicionalRetorno
    ): InfoAdicionalRetorno => {
        if (typeof InfoAdicionalRetorno.TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Informações adcionais tem que ser uma 'string' ")

        }
        if (InfoAdicionalRetorno.TIPO_DE_REGISTRO !== "2") {
            throw new BadRequestError("Tipo de registro no Informações adcionai deve ser 2 no arquivo de remessa ")
        }
        if (typeof InfoAdicionalRetorno.IDENTIFICADOR !== "string") {
            throw new BadRequestError("Identificador no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof InfoAdicionalRetorno.NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero de sequencia no Informações adcionais tem que ser uma 'string' ")

        }
        return {
            TIPO_DE_REGISTRO: InfoAdicionalRetorno.TIPO_DE_REGISTRO,
            IDENTIFICADOR: InfoAdicionalRetorno.IDENTIFICADOR,
            LISTA: InfoAdicionalRetorno.LISTA,
            NUMERO_SEQUENCIAL: InfoAdicionalRetorno.NUMERO_SEQUENCIAL
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
        COD_DO_MOVIMENTO: unknown,
        TIMESTAMP_EXPIRACAO: unknown,
        DATA_DE_VENCIMENTO: unknown,
        VALIDADE_APOS_VENCIMENTO: unknown,
        VALOR_ORIGINAL: unknown,
        TIPO_DE_PESSOA_DEVEDOR: unknown,
        CPFCNPJ_DEVEDOR: unknown,
        NOME_DEVEDOR: unknown,
        SOLICITACAO_AO_PAGADOR_OU_CAMPO_TEXTO_LIVRE: unknown,
        EXCLUSIVO_PSP_RECEBEDOR: unknown,
        DATA_DE_MOVIMENTO: unknown,
        CODIGOS_DE_ERROR: unknown,
        REVISAO: unknown,
        TARIFA_DE_COBRANCA: unknown,
        BRANCOS: unknown,
        NUMERO_SEQUENCIAL: unknown,
        REGISTRO_DETALHE_INFORMACOES_ADICIONAIS: unknown
    ): DetalheRetorno => {

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
        if (typeof COD_DO_MOVIMENTO !== "string") {
            throw new BadRequestError("Codigo de ocorrencia no Detalhe tem que ser uma 'string' ")
        }
        if (typeof TIMESTAMP_EXPIRACAO !== "string" && TIMESTAMP_EXPIRACAO !== null) {
            throw new BadRequestError("Timestamp tem que ser uma 'string' ou 'null'")
        }
        if (typeof DATA_DE_VENCIMENTO !== "string") {
            throw new BadRequestError("Data de vencimento no Detalhe tem que ser uma 'string' ")
        }
        if (typeof VALIDADE_APOS_VENCIMENTO !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ")
        }
        if (typeof VALOR_ORIGINAL !== "string") {
            throw new BadRequestError("Valor Original no Detalhe tem que ser uma 'string' ")
        }
        if (typeof TIPO_DE_PESSOA_DEVEDOR !== "string") {
            throw new BadRequestError("Tipo de pessoa devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof CPFCNPJ_DEVEDOR !== "string") {
            throw new BadRequestError("CPF ou CNPJ do devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof NOME_DEVEDOR !== "string") {
            throw new BadRequestError("Nome do devedor no Detalhe tem que ser uma 'string' ")
        }
        if (typeof SOLICITACAO_AO_PAGADOR_OU_CAMPO_TEXTO_LIVRE !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (typeof EXCLUSIVO_PSP_RECEBEDOR !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (typeof DATA_DE_MOVIMENTO !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (!Array.isArray(CODIGOS_DE_ERROR) || !CODIGOS_DE_ERROR.every((code) => typeof code === "string")) {
            throw new BadRequestError("CODIGOS_DE_ERROR deve ser um array de strings");
        }
        if (typeof REVISAO !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (typeof TARIFA_DE_COBRANCA !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (typeof BRANCOS !== "string") {
            throw new BadRequestError("Validade apos vencimento no Detalhe tem que ser uma 'string' ou 'null'")
        }
        if (!Array.isArray(REGISTRO_DETALHE_INFORMACOES_ADICIONAIS)) {
            throw new BadRequestError("REGISTRO_DETALHE_INFORMACOES_ADICIONAIS deve ser um array de strings");
        }
        const regInfoAdi = []
        for (let i = 0; REGISTRO_DETALHE_INFORMACOES_ADICIONAIS.length - 1; i++) {
            regInfoAdi.push(this.validationRegInfoAdiRetorno(REGISTRO_DETALHE_INFORMACOES_ADICIONAIS[0]))
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
            COD_DO_MOVIMENTO,
            TIMESTAMP_EXPIRACAO,
            DATA_DE_VENCIMENTO,
            VALIDADE_APOS_VENCIMENTO,
            VALOR_ORIGINAL,
            TIPO_DE_PESSOA_DEVEDOR,
            CPFCNPJ_DEVEDOR,
            NOME_DEVEDOR,
            SOLICITACAO_AO_PAGADOR_OU_CAMPO_TEXTO_LIVRE,
            EXCLUSIVO_PSP_RECEBEDOR,
            DATA_DE_MOVIMENTO,
            CODIGOS_DE_ERROR,
            REVISAO,
            TARIFA_DE_COBRANCA,
            BRANCOS,
            NUMERO_SEQUENCIAL,
            REGISTRO_DETALHE_INFORMACOES_ADICIONAIS

        }
    }

    public validatioEMV = (
        TIPO_DE_REGISTRO: unknown,
        OPERACAO: unknown,
        CHAVE_PIX: unknown,
        COD_DE_MOVIMENTO: unknown,
        DATA_DE_MOVIMENTO: unknown,
        EMV_DO_QR_CODE: unknown,
        LOCALTION: unknown,
        BRANCOS: unknown,
        NUMERO_SEQUENCIAL: unknown,
    ): EMV => {
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Informações adcionais tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "4") {
            throw new BadRequestError("Tipo de registro no Informações adcionai deve ser 4 no arquivo de remessa ")
        }
        if (typeof OPERACAO !== "string") {
            throw new BadRequestError("OPERACAO no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof CHAVE_PIX !== "string") {
            throw new BadRequestError("CHAVE do PIX no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof COD_DE_MOVIMENTO !== "string") {
            throw new BadRequestError("COD_DE_MOVIMENTO no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof DATA_DE_MOVIMENTO !== "string") {
            throw new BadRequestError("LOCALTION no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof EMV_DO_QR_CODE !== "string") {
            throw new BadRequestError("EMV_DO_QR_CODE no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof LOCALTION !== "string") {
            throw new BadRequestError("Identificador no Informações adcionais tem que ser uma 'string' ")

        }
        if (typeof BRANCOS !== "string") {
            throw new BadRequestError("BRANCOS no Informações adcionais tem que ser uma 'string' ")

        }

        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero de sequencia no Informações adcionais tem que ser uma 'string' ")

        }
        return {
            TIPO_DE_REGISTRO,
            OPERACAO,
            CHAVE_PIX,
            COD_DE_MOVIMENTO,
            DATA_DE_MOVIMENTO,
            EMV_DO_QR_CODE,
            LOCALTION,
            BRANCOS,
            NUMERO_SEQUENCIAL,
        }
    }


    public validationTrailer = (
        TIPO_DE_REGISTRO: unknown,
        CODIGO_DE_RETORNO: unknown,
        CODIGO_DE_SERVICO: unknown,
        ISPB: unknown,
        CODIGOS_DE_ERRO: unknown,
        VALOR_TOTAL: unknown,
        QTDE_DE_DETALHES: unknown,
        NUMERO_SEQUENCIAL: unknown
    ): TrailerRetorno => {
        if (typeof NUMERO_SEQUENCIAL !== "string") {
            throw new BadRequestError("Numero sequencial do registro recebedor no Trailer tem que ser uma 'string'")
        }
        if (typeof TIPO_DE_REGISTRO !== "string") {
            throw new BadRequestError("Tipo de registro no Trailer tem que ser uma 'string' ")

        }
        if (TIPO_DE_REGISTRO !== "9") {
            throw new BadRequestError("Tipo de registro no Trailer deve ser 9 no arquivo de remessa ")
        }
        if (typeof CODIGO_DE_RETORNO !== "string") {
            throw new BadRequestError("CODIGO_DE_RETORNO no Trailer tem que ser uma 'string' ")
        }
        if (typeof CODIGO_DE_SERVICO !== "string") {
            throw new BadRequestError("CODIGO_DE_SERVICO no Trailer tem que ser uma 'string' ")
        }
        if (typeof ISPB !== "string") {
            throw new BadRequestError("ISPB no Trailer tem que ser uma 'string' ")
        }
        if (!Array.isArray(CODIGOS_DE_ERRO) || !CODIGOS_DE_ERRO.every((code) => typeof code === "string")) {
            throw new BadRequestError("CODIGOS_DE_ERROR deve ser um array de strings");
        }
        if (typeof VALOR_TOTAL !== "string") {
            throw new BadRequestError("VALOR_TOTAL no Trailer tem que ser uma 'string' ")
        }
        if (typeof QTDE_DE_DETALHES !== "string") {
            throw new BadRequestError("QTDE_DE_DETALHES no Trailer tem que ser uma 'string' ")
        }


        return {
            TIPO_DE_REGISTRO,
            CODIGO_DE_RETORNO,
            CODIGO_DE_SERVICO,
            ISPB,
            CODIGOS_DE_ERRO,
            VALOR_TOTAL,
            QTDE_DE_DETALHES,
            NUMERO_SEQUENCIAL
        }
    }


}

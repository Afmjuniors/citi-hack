import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { RemessaDTO } from "../dto/RemessaDTO"
import { Retorno } from '../models/Retorno'
import { bucketName, s3 } from "../s3"
import { IdGenerator } from "../services/IdGenerator"
import { RegistroRemessa } from "../types"


export class RemessaBusiness {
    constructor(
        private remessaDTO: RemessaDTO,
        private idGenerator: IdGenerator
    ) { }

    public autenticarRemessa = async (json: any): Promise<{ message: any }> => {
        // console.log(JSON.parse(json))
        const file = json.buffer.toString()
        const data: RegistroRemessa = JSON.parse(file)
        const jsonID = this.idGenerator.generate()

  

            const header = this.remessaDTO.validationHeader(
                data.HEADER.TIPO_DE_REGISTRO,
                data.HEADER.OPERACAO,
                data.HEADER.LITERAL_DE_REMESSA,
                data.HEADER.CODIGO_DO_SERVICO,
                data.HEADER.LITERAL_DE_SERVICO,
                data.HEADER.ISPB_PARTICIPANTE,
                data.HEADER.TIPO_PESSOA_RECEBEDOR,
                data.HEADER.CPF_CNPJ,
                data.HEADER.AGENCIA,
                data.HEADER.CONTA,
                data.HEADER.TIPO_CONTA,
                data.HEADER.CHAVE_PIX,
                data.HEADER.DATA_DE_GERACAO,
                data.HEADER.NUMERO_SEQUENCIAL_DA_REMESSA,
                data.HEADER.VERSAO_DO_ARQUIVO,
                data.HEADER.NUMERO_SEQUENCIAL_DO_REGISTRO)

            for (let i = 0; i < data.DETALHE.length - 1; i++) {
            const detalhe = this.remessaDTO.validationDetalhe(
                data.DETALHE[i].TIPO_DE_REGISTRO,
                data.DETALHE[i].IDENTIFICADOR,
                data.DETALHE[i].TIPO_DE_PESSOA_RECEBEDOR,
                data.DETALHE[i].CPF_CNPJ,
                data.DETALHE[i].AGENCIA,
                data.DETALHE[i].CONTA,
                data.DETALHE[i].TIPO,
                data.DETALHE[i].CHAVE_PIX,
                data.DETALHE[i].TIPO_COBRANCA,
                data.DETALHE[i].COD_DE_OCORRENCIA,
                data.DETALHE[i].TIMESTAP_EXPIRACAO,
                data.DETALHE[i].DATA_DE_VENCIMENTO,
                data.DETALHE[i].VALIDADE_APOS_VECENCIMENTO,
                data.DETALHE[i].VALOR_ORIGINAL,
                data.DETALHE[i].TIPO_DE_PESSOA_DEVEDOR,
                data.DETALHE[i].CPF_CNPJ_DEVEDOR,
                data.DETALHE[i].NOME_DEVEDOR,
                data.DETALHE[i].SOLICITACAO_PAGADOR,
                data.DETALHE[i].NUMERO_SEQUENCIAL)
            }
            for (let i = 0; i < data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS.length - 1; i++) {
                const infoAdicional = this.remessaDTO.validationRegistroDetalhesInfoAdi(
                    data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS[i].TIPO_DE_REGISTRO,
                    data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS[i].IDENTIFICADOR,
                    data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS[i].LISTA,
                    data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS[i].NUMERO_SEQUENCIAL)             
            }
            for (let i = 0; i < data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO.length - 1; i++) {
                const dadosComVencimento = this.remessaDTO.validationDadosComVencimento(
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].TIPO_DE_REGISTRO,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].IDENTIFICADOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].EMAIL_DO_DEVEDOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].LOGRADOURO_DO_DEVEDOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].CIDADE_DO_DEVEDOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].ESTADO_DO_DEVEDOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].CEP_DO_DEVEDOR,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].MODALIDADE_JUROS,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].VALOR_MULTA,
                    data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO[i].NUMERO_SEQUENCIAL_DO_REGISTRO)
            }      

            const trailer = this.remessaDTO.validationTrailer(
                data.TRAILER.TIPO_DE_REGISTRO,
                data.TRAILER.VALOR,
                data.TRAILER.QTDE_DE_REGISTROS,
                data.TRAILER.NUMERO_SEQUENCIAL)


        await s3.send(new PutObjectCommand({
            Bucket: bucketName,
            Body: json.buffer,
            Key: "processing-files/" + jsonID + ".json",
            ContentType: json.mimetype
        }))

        //   const url = await getSignedUrl(s3, new GetObjectCommand({
        //     Bucket: bucketName,
        //     Key: jsonID
        //   }), { expiresIn: 120 })

        return {
            message:jsonID
        }
    }



}
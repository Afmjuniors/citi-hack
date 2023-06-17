import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { RemessaDTO } from "../dto/RemessaDTO"
import { bucketName, s3 } from "../s3"
import { IdGenerator } from "../services/IdGenerator"
import { Registro } from "../types"


export class RemessaBusiness {
    constructor(
        private remessaDTO: RemessaDTO,
        private idGenerator: IdGenerator
    ){}

    public autenticarRemessa = async (json: any): Promise<{ quantidade:number,message: any }> => {
        // console.log(JSON.parse(json))
        const file = json.buffer.toString()
        const data: Registro[] = JSON.parse(file).data
        const jsonID = this.idGenerator.generate()
        for(let i =0; i < data.length-1;i++){
          const header = this.remessaDTO.validationHeader(
                data[i].HEADER.TIPO_DE_REGISTRO,
                data[i].HEADER.OPERACAO,
                data[i].HEADER.LITERAL_DE_REMESSA,
                data[i].HEADER.CODIGO_DO_SERVICO,
                data[i].HEADER.LITERAL_DE_SERVICO,
                data[i].HEADER.ISPB_PARTICIPANTE,
                data[i].HEADER.TIPO_PESSOA_RECEBEDOR,
                data[i].HEADER.CPF_CNPJ,
                data[i].HEADER.AGENCIA,
                data[i].HEADER.CONTA,
                data[i].HEADER.TIPO_CONTA,
                data[i].HEADER.CHAVE_PIX,
                data[i].HEADER.DATA_DE_GERACAO,
                data[i].HEADER.NUMERO_SEQUENCIAL_DA_REMESSA,
                data[i].HEADER.VERSAO_DO_ARQUIVO,
                data[i].HEADER.NUMERO_SEQUENCIAL_DO_REGISTRO)
            const detalhe = this.remessaDTO.validationDetalhe(
                data[i].DETALHE.TIPO_DE_REGISTRO,
                data[i].DETALHE.TIPO_DE_PESSOA_RECEBEDOR,
                data[i].DETALHE.CPF_CNPJ,
                data[i].DETALHE.CHAVE_PIX,
                data[i].DETALHE.TIPO_COBRANCA,
                data[i].DETALHE.COD_DE_OCORRENCIA,
                data[i].DETALHE.NUMERO_SEQUENCIAL)
            const dadosComVencimento = this.remessaDTO.validationDadosComVencimento(
                data[i].DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO.TIPO_DE_REGISTRO,
                data[i].DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO.NUMERO_SEQUENCIAL_DO_REGISTRO)
            const trailer = this.remessaDTO.validationTrailer(
                data[i].TRAILER.TIPO_DE_REGISTRO,
                data[i].TRAILER.VALOR,
                data[i].TRAILER.QTDE_DE_REGISTROS,
                data[i].TRAILER.NUMERO_SEQUENCIAL)
        }

        await s3.send(new PutObjectCommand({
            Bucket: bucketName,
            Body: json.buffer,
            Key: "processing-files/"+jsonID+".json",
            ContentType: json.mimetype
          }))

        //   const url = await getSignedUrl(s3, new GetObjectCommand({
        //     Bucket: bucketName,
        //     Key: jsonID
        //   }), { expiresIn: 120 })

        return {
            quantidade:data.length,
            message: "url"
        }
    }



}
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { RemessaDTO } from "../dto/RemessaDTO"
import { RespostaDTO } from '../dto/RespostaDTO'
import { bucketName, bucketNameRetorno, s3 } from "../s3"
import { IdGenerator } from "../services/IdGenerator"
import { RegistroRemessa, RegistroRetorno } from "../types"


export class RemessaBusiness {
    constructor(
        private remessaDTO: RemessaDTO,
        private respostaDTO: RespostaDTO,
        private idGenerator: IdGenerator
    ) { }

    public autenticarRemessa = async (json: any): Promise<{ message: any }> => {
        // console.log(JSON.parse(json))
        const file = json.buffer.toString()
        const data: RegistroRemessa = JSON.parse(file)
        const jsonID = data.HEADER.ISPB_PARTICIPANTE+this.idGenerator.generate()

  

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



          // Exemplo de uso
          const url = await getSignedUrl(s3, new GetObjectCommand({
            Bucket: bucketNameRetorno,
            Key: "processing-files/" + jsonID + ".json"
          }), { expiresIn: 120 });
          
          async function getUrlContent(url:string) {
            try {
              const response = await fetch(url);
              if (response.ok) {
                const jsonContent = await response.json();
                return jsonContent;
              } else {
                console.error('Erro ao obter o conteúdo da URL:', response.status);
                return null;
              }
            } catch (error) {
              console.error('Erro ao obter o conteúdo da URL:', error);
              return null;
            }
          }
           
          const jsonContent:RegistroRetorno = await getUrlContent(url);
          if (jsonContent) {
            // O conteúdo do arquivo JSON está em jsonContent
            console.log(jsonContent);
          } else {
            // Não foi possível obter o conteúdo do arquivo JSON
            console.log('Não foi possível obter o conteúdo do arquivo JSON.');
          }

          const headerResposta = this.respostaDTO.validationHeader(
            jsonContent.HEADER.TIPO_DE_REGISTRO,
            jsonContent.HEADER.CODIGO_DE_RETORNO,
            jsonContent.HEADER.LITERAL_DE_RETORNO,
            jsonContent.HEADER.CODIGO_DO_SERVICO,
            jsonContent.HEADER.LITERAL_DE_SERVICO,
            jsonContent.HEADER.ISPB_PARTICIPANTE,
            jsonContent.HEADER.TIPO_DE_PESSOA_RECEBEDOR,
            jsonContent.HEADER.CPF_CNPJ,
            jsonContent.HEADER.AGENCIA,
            jsonContent.HEADER.CONTA,
            jsonContent.HEADER.TIPO_CONTA,
            jsonContent.HEADER.CHAVE_PIX,
            jsonContent.HEADER.DATA_DE_GERACAO,
            jsonContent.HEADER.CODIGO_DO_CONVENIO,
            jsonContent.HEADER.EXCLULSIVO_PSP_RECEBEDOR,
            jsonContent.HEADER.NOME_DO_RECEBEDOR,
            jsonContent.HEADER.CODIGOS_DE_ERROR,
            jsonContent.HEADER.BRANCOS,
            jsonContent.HEADER.NUMERO_SEQUENCIAL_DO_RETORNO,
            jsonContent.HEADER.VERSAO_DO_ARQUIVO,
            jsonContent.HEADER.NUMERO_SEQUENCIASL_DO_REGISTRO,
          )
          for(let i =0; i < jsonContent.DETALHE.length -1 ; i++){
            const detalheResposta = this.respostaDTO.validationDetalhe(
                jsonContent.DETALHE[i].TIPO_DE_REGISTRO,
                jsonContent.DETALHE[i].IDENTIFICADOR,
                jsonContent.DETALHE[i].TIPO_DE_PESSOA_RECEBEDOR,
                jsonContent.DETALHE[i].CPF_CNPJ,
                jsonContent.DETALHE[i].AGENCIA,
                jsonContent.DETALHE[i].CONTA,
                jsonContent.DETALHE[i].TIPO,
                jsonContent.DETALHE[i].CHAVE_PIX,
                jsonContent.DETALHE[i].TIPO_COBRANCA,
                jsonContent.DETALHE[i].COD_DO_MOVIMENTO,
                jsonContent.DETALHE[i].TIMESTAMP_EXPIRACAO,
                jsonContent.DETALHE[i].DATA_DE_VENCIMENTO,
                jsonContent.DETALHE[i].VALIDADE_APOS_VENCIMENTO,
                jsonContent.DETALHE[i].VALOR_ORIGINAL,
                jsonContent.DETALHE[i].TIPO_DE_PESSOA_DEVEDOR,
                jsonContent.DETALHE[i].CPFCNPJ_DEVEDOR,
                jsonContent.DETALHE[i].NOME_DEVEDOR,
                jsonContent.DETALHE[i].SOLICITACAO_AO_PAGADOR_OU_CAMPO_TEXTO_LIVRE,
                jsonContent.DETALHE[i].EXCLUSIVO_PSP_RECEBEDOR,
                jsonContent.DETALHE[i].DATA_DE_MOVIMENTO,
                jsonContent.DETALHE[i].CODIGOS_DE_ERROR,
                jsonContent.DETALHE[i].REVISAO,
                jsonContent.DETALHE[i].TARIFA_DE_COBRANCA,
                jsonContent.DETALHE[i].BRANCOS,
                jsonContent.DETALHE[i].NUMERO_SEQUENCIAL,
                jsonContent.DETALHE[i].REGISTRO_DETALHE_INFORMACOES_ADICIONAIS,
            )
          }
          for(let i = 0; i< jsonContent.EMV.length -1 ; i++){
            this.respostaDTO.validatioEMV(
                jsonContent.EMV[i].TIPO_DE_REGISTRO,
                jsonContent.EMV[i].OPERACAO,
                jsonContent.EMV[i].CHAVE_PIX,
                jsonContent.EMV[i].COD_DE_MOVIMENTO,
                jsonContent.EMV[i].DATA_DE_MOVIMENTO,
                jsonContent.EMV[i].EMV_DO_QR_CODE,
                jsonContent.EMV[i].LOCALTION,
                jsonContent.EMV[i].BRANCOS,
                jsonContent.EMV[i].NUMERO_SEQUENCIAL,
            )
          }

          this.respostaDTO.validationTrailer(
            jsonContent.TRAILER.TIPO_DE_REGISTRO,
            jsonContent.TRAILER.CODIGO_DE_RETORNO,
            jsonContent.TRAILER.CODIGO_DE_SERVICO,
            jsonContent.TRAILER.ISPB,
            jsonContent.TRAILER.CODIGOS_DE_ERRO,
            jsonContent.TRAILER.VALOR_TOTAL,
            jsonContent.TRAILER.QTDE_DE_DETALHES,
            jsonContent.TRAILER.NUMERO_SEQUENCIAL,
          )
          



        return {
            message:jsonContent
        }
    }



}
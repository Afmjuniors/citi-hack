import * as fs from 'fs';

// Função para remover espaços em branco à direita de uma string
function trimRight(value: string): string {
  return value.replace(/\s+$/, '');
}

// Função para converter uma linha de detalhe em um objeto Detalhe
function convertDetalheLine(line: string): any {
  const detalhe = {
    TIPO_DE_REGISTRO: line.substr(0, 1),
    IDENTIFICADOR: trimRight(line.substr(1, 32)),
    TIPO_DE_PESSOA_RECEBEDOR: line.substr(33, 2),
    CPF_CNPJ: trimRight(line.substr(35, 14)),
    AGENCIA: trimRight(line.substr(49, 4)),
    CONTA: trimRight(line.substr(53, 9)),
    TIPO: trimRight(line.substr(62, 4)),
    CHAVE_PIX: trimRight(line.substr(66, 20)),
    TIPO_COBRANCA: line.substr(86, 1),
    COD_DE_OCORRENCIA: line.substr(88, 2),
    TIMESTAP_EXPIRACAO: line.substr(90, 14),
    DATA_DE_VENCIMENTO: line.substr(104, 8),
    VALIDADE_APOS_VECENCIMENTO: line.substr(112, 2),
    VALOR_ORIGINAL: parseFloat(line.substr(114, 15)) / 100,
    TIPO_DE_PESSOA_DEVEDOR: line.substr(129, 2),
    CPF_CNPJ_DEVEDOR: trimRight(line.substr(131, 14)),
    NOME_DEVEDOR: trimRight(line.substr(145, 60)),
    SOLICITACAO_PAGADOR: trimRight(line.substr(205, 10)),
    NUMERO_SEQUENCIAL: line.substr(215, 2),
  };

  return detalhe;
}

// Função para converter o arquivo CNAB 750 em um objeto JSON
function convertCnab750ToJson(cnab750: string): any {
  const lines = cnab750.split('\n');

  const header = lines[0];
  const detalhes = lines.slice(1, lines.length - 3);
  const registroDetalheInformacoesAdicionais = lines[lines.length - 3];
  const dadosEspecificosDeCobrancaComVencimento = lines[lines.length - 2];
  const trailer = lines[lines.length - 1];

  const data = {
    HEADER: {
      TIPO_DE_REGISTRO: header.substr(0, 1),
      OPERACAO: header.substr(1, 1),
      LITERAL_DE_REMESSA: trimRight(header.substr(2, 7)),
      CODIGO_DO_SERVICO: header.substr(9, 2),
      LITERAL_DE_SERVICO: trimRight(header.substr(11, 8)),
      ISPB_PARTICIPANTE: trimRight(header.substr(19, 8)),
      TIPO_PESSOA_RECEBEDOR: header.substr(27, 2),
      CPF_CNPJ: trimRight(header.substr(29, 14)),
      AGENCIA: trimRight(header.substr(43, 4)),
      CONTA: trimRight(header.substr(47, 9)),
      TIPO_CONTA: trimRight(header.substr(56, 4)),
      CHAVE_PIX: trimRight(header.substr(60, 20)),
      DATA_DE_GERACAO: header.substr(80, 8),
      NUMERO_SEQUENCIAL_DA_REMESSA: header.substr(88, 6),
      VERSAO_DO_ARQUIVO: header.substr(94, 3),
      NUMERO_SEQUENCIAL_DO_REGISTRO: header.substr(97, 2),
    },
    DETALHE: detalhes.map(convertDetalheLine),
    REGISTRO_DETALHE_INFORMCOES_ADICIONAIS: {
      TIPO_DE_REGISTRO: registroDetalheInformacoesAdicionais.substr(0, 1),
      IDENTIFICADOR: trimRight(registroDetalheInformacoesAdicionais.substr(1, 32)),
      LISTA: [
        {
          NOME: trimRight(registroDetalheInformacoesAdicionais.substr(33, 40)),
          VALOR: parseFloat(registroDetalheInformacoesAdicionais.substr(73, 15)) / 100,
        },
      ],
      NUMERO_SEQUENCIAL: registroDetalheInformacoesAdicionais.substr(88, 2),
    },
    DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO: {
      TIPO_DE_REGISTRO: dadosEspecificosDeCobrancaComVencimento.substr(0, 1),
      IDENTIFICADOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(1, 32)),
      EMAIL_DO_DEVEDOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(33, 60)),
      LOGRADOURO_DO_DEVEDOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(93, 40)),
      CIDADE_DO_DEVEDOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(133, 20)),
      ESTADO_DO_DEVEDOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(153, 2)),
      CEP_DO_DEVEDOR: trimRight(dadosEspecificosDeCobrancaComVencimento.substr(155, 8)),
      MODALIDADE_JUROS: parseInt(dadosEspecificosDeCobrancaComVencimento.substr(163, 1)),
      VALOR_MULTA: parseFloat(dadosEspecificosDeCobrancaComVencimento.substr(164, 15)) / 100,
      NUMERO_SEQUENCIAL_DO_REGISTRO: dadosEspecificosDeCobrancaComVencimento.substr(179, 2),
    },
    TRAILER: {
      TIPO_DE_REGISTRO: trailer.substr(0, 1),
      VALOR: parseFloat(trailer.substr(1, 15)) / 100,
      QTDE_DE_REGISTROS: trailer.substr(16, 2),
      NUMERO_SEQUENCIAL: trailer.substr(18, 2),
    },
  };

  return data;
}

// Ler o arquivo CNAB 750
const cnab750 = fs.readFileSync('arquivo.cnab', 'utf-8');

// Converter o arquivo CNAB 750 em um objeto JSON
const jsonData = convertCnab750ToJson(cnab750);

// Imprimir o objeto JSON convertido
console.log(JSON.stringify(jsonData, null, 2));

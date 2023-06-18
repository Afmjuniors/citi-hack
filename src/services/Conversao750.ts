import * as fs from 'fs';

interface HeaderData {
  TIPO_DE_REGISTRO: string;
  OPERACAO: string;
  LITERAL_DE_REMESSA: string;
  CODIGO_DO_SERVICO: string;
  LITERAL_DE_SERVICO: string;
  ISPB_PARTICIPANTE: string;
  TIPO_PESSOA_RECEBEDOR: string;
  CPF_CNPJ: string;
  AGENCIA: string;
  CONTA: string;
  TIPO_CONTA: string;
  CHAVE_PIX: string;
  DATA_DE_GERACAO: string;
  NUMERO_SEQUENCIAL_DA_REMESSA: string;
  VERSAO_DO_ARQUIVO: string;
  NUMERO_SEQUENCIAL_DO_REGISTRO: string;
}

interface DetalheData {
  TIPO_DE_REGISTRO: string;
  IDENTIFICADOR: string;
  TIPO_DE_PESSOA_RECEBEDOR: string;
  CPF_CNPJ: string;
  AGENCIA: string;
  CONTA: string;
  TIPO: string;
  CHAVE_PIX: string;
  TIPO_COBRANCA: string;
  COD_DE_OCORRENCIA: string;
  TIMESTAP_EXPIRACAO: string | null;
  DATA_DE_VENCIMENTO: string | null;
  VALIDADE_APOS_VECENCIMENTO: string | null;
  VALOR_ORIGINAL: number;
  TIPO_DE_PESSOA_DEVEDOR: string;
  CPF_CNPJ_DEVEDOR: string;
  NOME_DEVEDOR: string;
  SOLICITACAO_PAGADOR: string;
  NUMERO_SEQUENCIAL: string;
}

interface InformacoesAdicionaisData {
  TIPO_DE_REGISTRO: string;
  IDENTIFICADOR: string;
  LISTA: {
    NOME: string;
    VALOR: number;
  }[];
  NUMERO_SEQUENCIAL: string;
}

interface CobrancaComVencimentoData {
  TIPO_DE_REGISTRO: string;
  IDENTIFICADOR: string;
  EMAIL_DO_DEVEDOR: string;
  LOGRADOURO_DO_DEVEDOR: string;
  CIDADE_DO_DEVEDOR: string;
  ESTADO_DO_DEVEDOR: string;
  CEP_DO_DEVEDOR: string;
  MODALIDADE_JUROS: number;
  VALOR_MULTA: number;
  NUMERO_SEQUENCIAL_DO_REGISTRO: string;
}

interface TrailerData {
  TIPO_DE_REGISTRO: string;
  VALOR: number;
  QTDE_DE_REGISTROS: string;
  NUMERO_SEQUENCIAL: string;
}

interface CNAB750Data {
  HEADER: HeaderData;
  DETALHE: DetalheData[];
  REGISTRO_DETALHE_INFORMCOES_ADICIONAIS: InformacoesAdicionaisData[];
  DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO: CobrancaComVencimentoData[];
  TRAILER: TrailerData;
}

const data: CNAB750Data = {
  HEADER: {
    TIPO_DE_REGISTRO: "0",
    OPERACAO: "1",
    LITERAL_DE_REMESSA: "REMESSA",
    CODIGO_DO_SERVICO: "02",
    LITERAL_DE_SERVICO: "PIX",
    ISPB_PARTICIPANTE: "9436939",
    TIPO_PESSOA_RECEBEDOR: "1",
    CPF_CNPJ: "12345678900",
    AGENCIA: "0001",
    CONTA: "1234567",
    TIPO_CONTA: "1",
    CHAVE_PIX: "12345678900",
    DATA_DE_GERACAO: "2023-06-18",
    NUMERO_SEQUENCIAL_DA_REMESSA: "000001",
    VERSAO_DO_ARQUIVO: "1",
    NUMERO_SEQUENCIAL_DO_REGISTRO: "000001",
  },
  DETALHE: [
    {
      TIPO_DE_REGISTRO: "1",
      IDENTIFICADOR: "001",
      TIPO_DE_PESSOA_RECEBEDOR: "1",
      CPF_CNPJ: "12345678900",
      AGENCIA: "0001",
      CONTA: "1234567",
      TIPO: "12",
      CHAVE_PIX: "12345678900",
      TIPO_COBRANCA: "01",
      COD_DE_OCORRENCIA: "01",
      TIMESTAP_EXPIRACAO: null,
      DATA_DE_VENCIMENTO: null,
      VALIDADE_APOS_VECENCIMENTO: null,
      VALOR_ORIGINAL: 100.0,
      TIPO_DE_PESSOA_DEVEDOR: "1",
      CPF_CNPJ_DEVEDOR: "12345678900",
      NOME_DEVEDOR: "John Doe",
      SOLICITACAO_PAGADOR: "",
      NUMERO_SEQUENCIAL: "000001",
    },
  ],
  REGISTRO_DETALHE_INFORMCOES_ADICIONAIS: [
    {
      TIPO_DE_REGISTRO: "3",
      IDENTIFICADOR: "001",
      LISTA: [
        { NOME: "Informacao 1", VALOR: 123.45 },
        { NOME: "Informacao 2", VALOR: 678.90 },
      ],
      NUMERO_SEQUENCIAL: "000001",
    },
  ],
  DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO: [
    {
      TIPO_DE_REGISTRO: "4",
      IDENTIFICADOR: "001",
      EMAIL_DO_DEVEDOR: "johndoe@example.com",
      LOGRADOURO_DO_DEVEDOR: "Rua A",
      CIDADE_DO_DEVEDOR: "São Paulo",
      ESTADO_DO_DEVEDOR: "SP",
      CEP_DO_DEVEDOR: "12345-678",
      MODALIDADE_JUROS: 1.5,
      VALOR_MULTA: 2.0,
      NUMERO_SEQUENCIAL_DO_REGISTRO: "000001",
    },
  ],
  TRAILER: {
    TIPO_DE_REGISTRO: "9",
    VALOR: 100.0,
    QTDE_DE_REGISTROS: "000003",
    NUMERO_SEQUENCIAL: "000002",
  },
};

const cnab750 = `${data.HEADER.TIPO_DE_REGISTRO.padEnd(3, ' ')}${data.HEADER.OPERACAO.padEnd(4, ' ')}${data.HEADER.LITERAL_DE_REMESSA.padEnd(9, ' ')}${data.HEADER.CODIGO_DO_SERVICO.padEnd(2, ' ')}${data.HEADER.LITERAL_DE_SERVICO.padEnd(8, ' ')}${data.HEADER.ISPB_PARTICIPANTE.padEnd(8, ' ')}${data.HEADER.TIPO_PESSOA_RECEBEDOR.padEnd(1, ' ')}${data.HEADER.CPF_CNPJ.padEnd(14, ' ')}${data.HEADER.AGENCIA.padEnd(4, ' ')}${data.HEADER.CONTA.padEnd(12, ' ')}${data.HEADER.TIPO_CONTA.padEnd(2, ' ')}${data.HEADER.CHAVE_PIX.padEnd(47, ' ')}${data.HEADER.DATA_DE_GERACAO.padEnd(8, ' ')}${data.HEADER.NUMERO_SEQUENCIAL_DA_REMESSA.padEnd(6, ' ')}${data.HEADER.VERSAO_DO_ARQUIVO.padEnd(3, ' ')}${data.HEADER.NUMERO_SEQUENCIAL_DO_REGISTRO.padEnd(6, ' ')}
`;

const detalhe = data.DETALHE.map((detalheData) => {
  return `${detalheData.TIPO_DE_REGISTRO.padEnd(3, ' ')}${detalheData.IDENTIFICADOR.padEnd(3, ' ')}${detalheData.TIPO_DE_PESSOA_RECEBEDOR.padEnd(1, ' ')}${detalheData.CPF_CNPJ.padEnd(14, ' ')}${detalheData.AGENCIA.padEnd(4, ' ')}${detalheData.CONTA.padEnd(12, ' ')}${detalheData.TIPO.padEnd(2, ' ')}${detalheData.CHAVE_PIX.padEnd(47, ' ')}${detalheData.TIPO_COBRANCA.padEnd(2, ' ')}${detalheData.COD_DE_OCORRENCIA.padEnd(2, ' ')}${detalheData.TIMESTAP_EXPIRACAO?.padEnd(14, ' ') || ''.padEnd(14, ' ')}${detalheData.DATA_DE_VENCIMENTO?.padEnd(8, ' ') || ''.padEnd(8, ' ')}${detalheData.VALIDADE_APOS_VECENCIMENTO?.padEnd(4, ' ') || ''.padEnd(4, ' ')}${detalheData.VALOR_ORIGINAL.toFixed(2).replace('.', '').padStart(15, '0')}${detalheData.TIPO_DE_PESSOA_DEVEDOR.padEnd(1, ' ')}${detalheData.CPF_CNPJ_DEVEDOR.padEnd(14, ' ')}${detalheData.NOME_DEVEDOR.padEnd(40, ' ')}${detalheData.SOLICITACAO_PAGADOR.padEnd(40, ' ')}${detalheData.NUMERO_SEQUENCIAL.padEnd(6, ' ')}
`;
}).join('');

const informacoesAdicionais = data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS.map((infoData) => {
  const lista = infoData.LISTA.map((item) => {
    return `${item.NOME.padEnd(20, ' ')}${item.VALOR.toFixed(2).replace('.', '').padStart(15, '0')}
`;
  }).join('');

  return `${infoData.TIPO_DE_REGISTRO.padEnd(3, ' ')}${infoData.IDENTIFICADOR.padEnd(3, ' ')}${lista}${infoData.NUMERO_SEQUENCIAL.padEnd(6, ' ')}
`;
}).join('');

const cobrancaComVencimento = data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO.map((cobrancaData) => {
  return `${cobrancaData.TIPO_DE_REGISTRO.padEnd(3, ' ')}${cobrancaData.IDENTIFICADOR.padEnd(3, ' ')}${cobrancaData.EMAIL_DO_DEVEDOR.padEnd(80, ' ')}${cobrancaData.LOGRADOURO_DO_DEVEDOR.padEnd(80, ' ')}${cobrancaData.CIDADE_DO_DEVEDOR.padEnd(20, ' ')}${cobrancaData.ESTADO_DO_DEVEDOR.padEnd(2, ' ')}${cobrancaData.CEP_DO_DEVEDOR.padEnd(8, ' ')}${cobrancaData.MODALIDADE_JUROS.toFixed(2).replace('.', '').padStart(15, '0')}${cobrancaData.VALOR_MULTA.toFixed(2).replace('.', '').padStart(15, '0')}${cobrancaData.NUMERO_SEQUENCIAL_DO_REGISTRO.padEnd(6, ' ')}
`;
}).join('');

const trailer = `${data.TRAILER.TIPO_DE_REGISTRO.padEnd(3, ' ')}${data.TRAILER.VALOR.toFixed(2).replace('.', '').padStart(18, '0')}${data.TRAILER.QTDE_DE_REGISTROS.padEnd(6, ' ')}${data.TRAILER.NUMERO_SEQUENCIAL.padEnd(6, ' ')}
`;

const cnab750String = `${cnab750}${detalhe}${informacoesAdicionais}${cobrancaComVencimento}${trailer}`;

fs.writeFile('cnab750.cnab', cnab750String, (err) => {
  if (err) {
    console.error('Erro ao gerar arquivo CNAB 750:', err);
  } else {
    console.log('Arquivo CNAB 750 gerado com sucesso!');
  }
});

"use strict";
exports.__esModule = true;
var fs = require("fs");
var data = {
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
        NUMERO_SEQUENCIAL_DO_REGISTRO: "000001"
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
            NUMERO_SEQUENCIAL: "000001"
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
            NUMERO_SEQUENCIAL: "000001"
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
            NUMERO_SEQUENCIAL_DO_REGISTRO: "000001"
        },
    ],
    TRAILER: {
        TIPO_DE_REGISTRO: "9",
        VALOR: 100.0,
        QTDE_DE_REGISTROS: "000003",
        NUMERO_SEQUENCIAL: "000002"
    }
};
var cnab750 = "".concat(data.HEADER.TIPO_DE_REGISTRO.padEnd(3, ' ')).concat(data.HEADER.OPERACAO.padEnd(4, ' ')).concat(data.HEADER.LITERAL_DE_REMESSA.padEnd(9, ' ')).concat(data.HEADER.CODIGO_DO_SERVICO.padEnd(2, ' ')).concat(data.HEADER.LITERAL_DE_SERVICO.padEnd(8, ' ')).concat(data.HEADER.ISPB_PARTICIPANTE.padEnd(8, ' ')).concat(data.HEADER.TIPO_PESSOA_RECEBEDOR.padEnd(1, ' ')).concat(data.HEADER.CPF_CNPJ.padEnd(14, ' ')).concat(data.HEADER.AGENCIA.padEnd(4, ' ')).concat(data.HEADER.CONTA.padEnd(12, ' ')).concat(data.HEADER.TIPO_CONTA.padEnd(2, ' ')).concat(data.HEADER.CHAVE_PIX.padEnd(47, ' ')).concat(data.HEADER.DATA_DE_GERACAO.padEnd(8, ' ')).concat(data.HEADER.NUMERO_SEQUENCIAL_DA_REMESSA.padEnd(6, ' ')).concat(data.HEADER.VERSAO_DO_ARQUIVO.padEnd(3, ' ')).concat(data.HEADER.NUMERO_SEQUENCIAL_DO_REGISTRO.padEnd(6, ' '), "\n");
var detalhe = data.DETALHE.map(function (detalheData) {
    var _a, _b, _c;
    return "".concat(detalheData.TIPO_DE_REGISTRO.padEnd(3, ' ')).concat(detalheData.IDENTIFICADOR.padEnd(3, ' ')).concat(detalheData.TIPO_DE_PESSOA_RECEBEDOR.padEnd(1, ' ')).concat(detalheData.CPF_CNPJ.padEnd(14, ' ')).concat(detalheData.AGENCIA.padEnd(4, ' ')).concat(detalheData.CONTA.padEnd(12, ' ')).concat(detalheData.TIPO.padEnd(2, ' ')).concat(detalheData.CHAVE_PIX.padEnd(47, ' ')).concat(detalheData.TIPO_COBRANCA.padEnd(2, ' ')).concat(detalheData.COD_DE_OCORRENCIA.padEnd(2, ' ')).concat(((_a = detalheData.TIMESTAP_EXPIRACAO) === null || _a === void 0 ? void 0 : _a.padEnd(14, ' ')) || ''.padEnd(14, ' ')).concat(((_b = detalheData.DATA_DE_VENCIMENTO) === null || _b === void 0 ? void 0 : _b.padEnd(8, ' ')) || ''.padEnd(8, ' ')).concat(((_c = detalheData.VALIDADE_APOS_VECENCIMENTO) === null || _c === void 0 ? void 0 : _c.padEnd(4, ' ')) || ''.padEnd(4, ' ')).concat(detalheData.VALOR_ORIGINAL.toFixed(2).replace('.', '').padStart(15, '0')).concat(detalheData.TIPO_DE_PESSOA_DEVEDOR.padEnd(1, ' ')).concat(detalheData.CPF_CNPJ_DEVEDOR.padEnd(14, ' ')).concat(detalheData.NOME_DEVEDOR.padEnd(40, ' ')).concat(detalheData.SOLICITACAO_PAGADOR.padEnd(40, ' ')).concat(detalheData.NUMERO_SEQUENCIAL.padEnd(6, ' '), "\n");
}).join('');
var informacoesAdicionais = data.REGISTRO_DETALHE_INFORMCOES_ADICIONAIS.map(function (infoData) {
    var lista = infoData.LISTA.map(function (item) {
        return "".concat(item.NOME.padEnd(20, ' ')).concat(item.VALOR.toFixed(2).replace('.', '').padStart(15, '0'), "\n");
    }).join('');
    return "".concat(infoData.TIPO_DE_REGISTRO.padEnd(3, ' ')).concat(infoData.IDENTIFICADOR.padEnd(3, ' ')).concat(lista).concat(infoData.NUMERO_SEQUENCIAL.padEnd(6, ' '), "\n");
}).join('');
var cobrancaComVencimento = data.DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO.map(function (cobrancaData) {
    return "".concat(cobrancaData.TIPO_DE_REGISTRO.padEnd(3, ' ')).concat(cobrancaData.IDENTIFICADOR.padEnd(3, ' ')).concat(cobrancaData.EMAIL_DO_DEVEDOR.padEnd(80, ' ')).concat(cobrancaData.LOGRADOURO_DO_DEVEDOR.padEnd(80, ' ')).concat(cobrancaData.CIDADE_DO_DEVEDOR.padEnd(20, ' ')).concat(cobrancaData.ESTADO_DO_DEVEDOR.padEnd(2, ' ')).concat(cobrancaData.CEP_DO_DEVEDOR.padEnd(8, ' ')).concat(cobrancaData.MODALIDADE_JUROS.toFixed(2).replace('.', '').padStart(15, '0')).concat(cobrancaData.VALOR_MULTA.toFixed(2).replace('.', '').padStart(15, '0')).concat(cobrancaData.NUMERO_SEQUENCIAL_DO_REGISTRO.padEnd(6, ' '), "\n");
}).join('');
var trailer = "".concat(data.TRAILER.TIPO_DE_REGISTRO.padEnd(3, ' ')).concat(data.TRAILER.VALOR.toFixed(2).replace('.', '').padStart(18, '0')).concat(data.TRAILER.QTDE_DE_REGISTROS.padEnd(6, ' ')).concat(data.TRAILER.NUMERO_SEQUENCIAL.padEnd(6, ' '), "\n");
var cnab750String = "".concat(cnab750).concat(detalhe).concat(informacoesAdicionais).concat(cobrancaComVencimento).concat(trailer);
fs.writeFile('cnab750.cnab', cnab750String, function (err) {
    if (err) {
        console.error('Erro ao gerar arquivo CNAB 750:', err);
    }
    else {
        console.log('Arquivo CNAB 750 gerado com sucesso!');
    }
});

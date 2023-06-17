import { DadosComVencimento, Detalhe, Header, Trailer } from "../types";

export class Remessa {
    constructor(
       private HEADER:Header,
        private DETALHE:Detalhe,
        private DADOS_ESPECIFICOS_DE_COBRANCA_COM_VENCIMENTO:DadosComVencimento,
        private TRAILER:Trailer
    ){}
}
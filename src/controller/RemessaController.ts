import { Request, Response } from "express"
import { RemessaBusiness } from "../Business/RemessaBusiness"
import { BadRequestError } from "../error/BadRequestError"
import { BaseError } from "../error/BaseError"
import { s3 } from "../s3"



export class RemessaController{
    constructor (
        private remessaBusiness: RemessaBusiness
    ){}
    public postJsonRemessa =  async (req: Request, res: Response) => {
        try {
            const json = req.file
            if(json==undefined){
                throw new BadRequestError("Arquivo de remessa vazio")
            }
            
            const output = await this.remessaBusiness.autenticarRemessa(json)
            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
   
}
}
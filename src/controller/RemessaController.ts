import { Request, Response } from "express"
import { RemessaBuniness } from "../Business/RemessaBusiness"
import { BaseError } from "../error/BaseError"



export class RemessaController{
    constructor (
        private remessaBusiness: RemessaBuniness
    ){}
    public postJsonRemessa =  async (req: Request, res: Response) => {
        try {
            const file = req.file
            if(file==undefined){
                throw new Error("erro")
            }
            const json = file.buffer.toString()
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
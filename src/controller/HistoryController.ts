import { Request, Response } from "express"
import { HistoryBusiness } from "../Business/HistoryBusiness"
import { BaseError } from "../error/BaseError"

export class HistoryController{
constructor(
    private historyBusiness:HistoryBusiness
){}
    public getAllHistory =  async (req: Request, res: Response) => {
        try {

            const output = await this.historyBusiness.getHistory()

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

public downloadHistoryById =  async (req: Request, res: Response) => {
    try {
        const id = req.body.id

        const output = await this.historyBusiness.urlHistoryByID(id)

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
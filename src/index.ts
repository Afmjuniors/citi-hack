import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { remessaRouter } from './routers/RemessaRoute'
import { BaseError } from './error/BaseError'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT)}`)
})

app.get("/api/test", async (req: Request, res: Response) => {
    try {


        res.status(200).send("Hello World")
    } catch (error) {
        console.log(error)

        if (error instanceof BaseError) {
            res.status(error.statusCode).send(error.message)
        } else {
            res.status(500).send("Erro inesperado")
        }
    }
})

app.use("/remessa", remessaRouter)


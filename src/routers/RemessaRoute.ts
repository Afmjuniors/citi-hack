import express from "express"
import { RemessaBuniness } from "../Business/RemessaBusiness"
import { RemessaController } from "../controller/RemessaController"

export const remessaRouter = express.Router()

const remessaController = new RemessaController(
    new RemessaBuniness()
)


remessaRouter.post("/", remessaController.postJsonRemessa)
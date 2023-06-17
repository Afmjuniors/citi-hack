import express from "express"
import { RemessaBuniness } from "../Business/RemessaBusiness"
import { RemessaController } from "../controller/RemessaController"
import { multerUpload } from "../multer"

export const remessaRouter = express.Router()

const remessaController = new RemessaController(
    new RemessaBuniness()
)


remessaRouter.post("/",multerUpload.single("remessa"),  remessaController.postJsonRemessa)
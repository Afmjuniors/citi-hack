import express from "express"
import { RemessaBusiness } from "../Business/RemessaBusiness"
import { RemessaController } from "../controller/RemessaController"
import { RemessaDTO } from "../dto/RemessaDTO"
import { multerUpload } from "../multer"
import { IdGenerator } from "../services/IdGenerator"

export const remessaRouter = express.Router()

const remessaController = new RemessaController(
    new RemessaBusiness(
        new RemessaDTO(),
        new IdGenerator()
    )
)


remessaRouter.post("/",multerUpload.single("remessa"),  remessaController.postJsonRemessa)




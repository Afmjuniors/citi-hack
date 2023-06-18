import express from "express"
import { HistoryBusiness } from "../Business/HistoryBusiness"
import { RemessaBusiness } from "../Business/RemessaBusiness"
import { HistoryController } from "../controller/HistoryController"
import { RemessaController } from "../controller/RemessaController"
import { RemessaDTO } from "../dto/RemessaDTO"
import { multerUpload } from "../multer"
import { IdGenerator } from "../services/IdGenerator"

export const historyRouter = express.Router()

const historyController = new HistoryController(
    new HistoryBusiness()
)


historyRouter.get("/",  historyController.getAllHistory)
historyRouter.post("/",  historyController.downloadHistoryById)




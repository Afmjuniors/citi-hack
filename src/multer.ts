import multer from "multer"

const storage = multer.memoryStorage()

const multerConfig: multer.Options = {
  storage: storage,

  fileFilter: (req, file, cb) => {
    cb(null, true);
  },

  limits: {
    fileSize: 2 * 1024 * 1024 // 2mb
  }
}

export const multerUpload = multer(multerConfig)
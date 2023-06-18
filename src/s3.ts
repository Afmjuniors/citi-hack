import { S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config()

export const bucketName = "citi-qr-code"
export const bucketNameRetorno ="citi-qr-response"

export const s3 = new S3Client({
  region: process.env.AWS_S3_BUCKET_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
  }
})

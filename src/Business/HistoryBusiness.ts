import { PutObjectCommand, GetObjectCommand,ListObjectsV2Command  } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { bucketName, s3 } from "../s3"
export class HistoryBusiness{


    public getHistory = async ()=>{

        const command = new ListObjectsV2Command({
            Bucket: bucketName,
          });
          const response = await s3.send(command)
          return response.Contents

    }
    public urlHistoryByID =async (id:string):Promise<{url:string}>=> {
             const url = await getSignedUrl(s3, new GetObjectCommand({
            Bucket: bucketName,
            Key: id
          }), { expiresIn: 120 })

          return {url}
    }

}
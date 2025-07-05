import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand
} from '@aws-sdk/client-s3'

const REGION = import.meta.env.VITE_AWS_REGION
const BUCKET = import.meta.env.VITE_AWS_BUCKET
const client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  }
})

export async function listFiles() {
  const data = await client.send(new ListObjectsV2Command({ Bucket: BUCKET }))
  return data.Contents || []
}

export async function uploadFile(file) {
  const body = await file.arrayBuffer()
  await client.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: file.name,
    Body: body
  }))
}
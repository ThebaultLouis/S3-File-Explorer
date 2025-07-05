// electron/s3Service.ts
import {
  S3Client,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';

const REGION = process.env.AWS_REGION!;
const BUCKET = process.env.AWS_BUCKET!;
const client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export async function listFiles() {
  const data = await client.send(
    new ListObjectsV2Command({ Bucket: BUCKET })
  );
  return data.Contents || [];
}

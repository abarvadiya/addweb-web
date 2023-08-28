import { S3 } from "aws-sdk";

const s3Client = new S3({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
});

export default s3Client;

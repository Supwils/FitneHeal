import AWS from 'aws-sdk';
// Configure the AWS SDK to use Cloudflare R2
const s3 = new AWS.S3({
  endpoint: 'https://https://f770b2b670d67cdb86222802fe734e2d.r2.cloudflarestorage.com/fitneheal', // Replace with your R2 endpoint
  accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID, // Set as environment variable
  secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY, // Set as environment variable
  signatureVersion: 'v4',
  region: 'auto', // Or specify a region if required for your use case
});

module.exports = s3;

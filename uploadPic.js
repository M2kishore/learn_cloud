/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

const bucketName = 'evaldarshan';

const filePath = '/Users/darshan/Desktop/Screenshot 2022-04-19 at 10.00.38 AM.png';

// The new ID for your GCS file
const destFileName = 'uploadedPic';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

async function uploadFile() {
  await storage.bucket(bucketName).upload(filePath, {
    destination: destFileName,
  });

  console.log(`${filePath} uploaded to ${bucketName}`);
}

uploadFile().catch(console.error);
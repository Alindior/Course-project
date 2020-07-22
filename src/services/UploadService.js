const fs = require("fs");
const AWS = require('aws-sdk');
const config = require("../keys");

const s3 = new AWS.S3({
    accessKeyId: config.AWSAccessKeyId,
    secretAccessKey: config.AWSSecretKey,
});

module.exports = class UploadService {
    async uploadFile(file, callback) {
        fs.readFile(`src/uploads/` + file.filename, async (err, data) => {
            if (err) {
                console.log(err);
            }
            const params = {
                Bucket: config.Bucket,
                Key: file.filename,
                Body: data,
                ContentType: file.mimetype,
                ACL: 'public-read'
            };
            const res = await new Promise((resolve, reject) => {
                s3.upload(params, (err, data) => err == null ? resolve(data) : reject(err));
            });
            callback(res);
            return res;
        })
    }
}


const fs = require("fs");
const AWS = require('aws-sdk');
const config = require("../keys");

const s3 = new AWS.S3({
    accessKeyId: config.AWSAccessKeyId,
    secretAccessKey: config.AWSSecretKey,
});

module.exports = class UploadService {
    async uploadFile(file, callback) {
        const params = {
            Bucket: config.Bucket,
            Key: file.name,
            Body: file.data,
            ContentType: file.mimetype,
            ACL: 'public-read'
        };
        const res = await new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => err == null ? resolve(data) : reject(err));
        });
        return res.Location;
    }
}


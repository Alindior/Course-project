module.exports = {
    port: process.env.PORT || 3001,
    secret: process.env.SECRET,
    "mongoUrl": process.env.MONGO_URL,
    "emailPassword": process.env.EMAIL_PASSWORD,
    "emailFrom": process.env.EMAIL,
    "AWSAccessKeyId": process.env.AWS_KEY,
    "AWSSecretKey": process.env.AWS_SECRET,
    "Bucket": process.env.AWS_BUCKET,
    "baseUrl": process.env.BASE_URL
};

const nodemailer = require('nodemailer');
const config = require("../keys");

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    ignoreTLS: false,
    secure: false,
    auth: {
        user: config.emailFrom,
        pass: config.emailPassword
    }
});

module.exports = transporter;
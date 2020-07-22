const nodemailer = require('nodemailer');
const config = require("../keys");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.emailFrom,
        pass: config.emailPassword
    }
});

module.exports = transporter;
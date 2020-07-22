const config = require("../keys");

module.exports = (email, userId) => {
    return {
        from: config.emailFrom,
        to: email,
        subject: "Подтвердите регистрацию своего аккаунта",
        html: `
        <h1>Добро пожаловать на сайт</h1> 
        <p>Вы успешно создали новый аккаунт с email - ${email}</p>
        <hr/>
        <a href="http://localhost:3001/api/auth/confirm/${userId}">Перейдите по ссылке для подтверждения регистрации!</a>
        `
    }
}
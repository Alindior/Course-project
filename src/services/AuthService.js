const byCrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../keys");
const confirmEmail = require("../emails/confirmEmail");
const transporter = require("../lib/emailer-config");

module.exports = class UserServis {
    constructor(userModel) {
        this._userModel = userModel;
    }
    async Registration(canditateUser) {
        try {
            const { email, login, password } = canditateUser;
            const salt = await byCrypt.genSalt(10);
            const hash = await byCrypt.hash(password, salt);
            const user = new this._userModel({ email, login, password: hash });
            if (user) {
                await user.save();
                await transporter.sendMail(confirmEmail(email, user._id));
                return { message: "User created" }
            }
        } catch (e) {
            console.log(e);
        }
    }
    async Login(canditateUser) {
        try {
            const { email, password } = canditateUser;
            const user = await this._userModel.findOne({ email });
            if (!user) {
                return { message: "Пользователя с таким Email'ом не существует" }
            }
            if (!user.status) {
                return { message: "Ваш аккаунт заблокирован" }
            }
            const isMatch = await byCrypt.compare(password, user.password);
            if (isMatch) {
                if (user.isConfirmed) {
                    const payload = {
                        id: user.id,
                        login: user.login,
                        name: user.name,
                        admin: user.admin,
                        status: user.status,
                        name: user.name,
                        lastname: user.lastname
                    };
                    const token = jwt.sign(payload, config.secret);
                    return { token: token };
                } else {
                    return { message: "Аккаунт еще не подтвержден , проверьте почтовый ящик, который вы указали при регистрации" }
                }
            } else {
                return { message: "пароль не верный" }
            }
        } catch (e) {
            console.log(e);
        }
    }

    async UpdateToken(login) {
        try {
            const user = await this._userModel.findOne({ login });
            if (user) {
                const payload = {
                    id: user.id,
                    login: user.login,
                    name: user.name,
                    admin: user.admin,
                    name: user.name,
                    lastname: user.lastname
                };
                const token = jwt.sign(payload, config.secret, { expiresIn: "1h" });
                return { token: token };
            }
        } catch (e) {
            console.log(e);
        }
    }

    async ValidationBeforRegister(canditateUser) {
        try {
            const { email, login } = canditateUser;
            const candidateEmail = await this._userModel.findOne({ email });
            const candidateLogin = await this._userModel.findOne({ login });
            if (candidateEmail || candidateLogin) {
                const reason = candidateEmail ? "email" : "login";
                return { isValid: false, reason }
            }
            return { isValid: true }
        } catch (e) {
            console.log(e);
        }
    }
    async ConfirmRegistration(id) {
        try {
            const user = await this._userModel.findOne({ _id: id });
            user.isConfirmed = true;
            await user.save();
            return { message: "Регистрация успешно подтверждена" }
        } catch (e) {
            console.log(e);
            return false
        }
    }

}
const AuthService = require("./AuthService");

module.exports = class UserService {
    constructor(userModel) {
        this._userModel = userModel;
    }

    async GetAllUsers() {
        try {
            const users = await this._userModel.find();
            return users;
        } catch (e) {
            console.log(e);
        }
    }
    async DeleteUser(usersId) {
        try {
            const deletedUser = await this._userModel.findByIdAndDelete({ _id: usersId });
            if (deletedUser) {
                return deletedUser;
            }
        } catch (e) {
            console.log(e);
        }
    }
    async LockedUser(usersId) {
        try {
            const user = await this._userModel.findById({ _id: usersId });
            if (user) {
                user.status = false;
                await user.save();
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }
    async UnlockUser(usersId) {
        try {
            const user = await this._userModel.findById({ _id: usersId });
            if (user) {
                user.status = true;
                await user.save();
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }
    async SetAdminUser(usersId) {
        try {
            const user = await this._userModel.findById({ _id: usersId });
            if (user) {
                user.admin = true;
                await user.save();
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async RemoveAdminUser(usersId) {
        try {
            const user = await this._userModel.findById({ _id: usersId });
            if (user) {
                user.admin = false;
                await user.save();
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async ChangeUserInfo(usersId, body) {
        try {
            const { login, name, lastname } = body;
            const user = await this._userModel.findById({ _id: usersId });
            if (user) {
                user.name = name;
                user.login = login;
                user.lastname = lastname;
                await user.save();
                return user;
            }
        } catch (e) {
            console.log(e);
        }
    }
}
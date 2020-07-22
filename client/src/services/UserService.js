import axios from "axios";

export class UserService {
    async GetAllUsers() {
        try {
            const { data } = await axios.get("api/users");
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    async RemoveUser(usersId) {
        try {
            const { data } = await axios.delete(`/api/users/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    async SetAdminUser(usersId) {
        try {
            const { data } = await axios.put(`/api/users/admin/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    async RemoveAdminUser(usersId) {
        try {
            const { data } = await axios.put(`/api/users/unadmin/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    async BlockeUser(usersId) {
        try {
            const { data } = await axios.put(`/api/users/block/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    async UnlockUser(usersId) {
        try {
            const { data } = await axios.put(`/api/users/unlock/${usersId}`);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async ChangeUserInfo(userInfo) {
        try {
            const { data } = await axios.put(`/api/users/user`, userInfo);
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
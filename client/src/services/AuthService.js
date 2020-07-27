import axios from 'axios';
import jwtDecode from "jwt-decode";

export class AuthService {
    async Login(userDate) {
        try {
            const { data } = await axios.post("/api/auth/login", userDate);
            if (data.token) {
                const decoded = jwtDecode(data.token);
                localStorage.setItem('access_token', data.token);
                this.setAuthToken(data.token);
                return { token: decoded };
            }
        } catch ({ response }) {
            return { error: response.data };
        }
    }
    async Register(userDate) {
        try {
            const { data } = await axios.post("/api/auth/register", userDate);
            return { message: data.message };
        } catch ({ response }) {
            return { error: response.data.message }
        }
    }

    Logout() {
        localStorage.removeItem("access_token");
        this.setAuthToken(false);
    }

    setAuthToken(token) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization']
        }
    }

    updateToken(token) {
        const decoded = jwtDecode(token);
        localStorage.setItem('access_token', token);
        this.setAuthToken(token);
        return { token: decoded };
    }

    checkAuthStatus() {
        if (localStorage.access_token) {
            const { access_token } = localStorage;
            this.setAuthToken(access_token);
            const decoded = jwtDecode(access_token);
            return { status: true, user: decoded };
        }
        return { status: false };
    }
}


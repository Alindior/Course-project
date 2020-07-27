import { Actions } from "./actionTypes";
import { showAlert, showModalSuccessRegistr } from "../app/actions";
import { AlertTypes } from "../app/actionTypes";

export const register = (userDate) => async (dispatch, getState, { AuthService }) => {
    try {
        const { message, error } = await AuthService.Register(userDate);
        if (error) {
            dispatch(showAlert(error, AlertTypes.info));
            return null;
        }
        if (message) {
            dispatch(showAlert(message, AlertTypes.success));
            dispatch(showModalSuccessRegistr())
        }
    } catch (e) {
        dispatch(showAlert("Что-то пошло не так", AlertTypes.warning));
    }
}

export const logIn = (user, history) => async (dispatch, getState, { AuthService }) => {
    try {
        const { token, error } = await AuthService.Login(user);
        if (token) {
            console.log("нормас");
            dispatch({ type: Actions.SET_CURRENT_USER, payload: token });
            history.push("/home");
        }
        if (error) {
            dispatch(showAlert(error, AlertTypes.error));
        }
    } catch (e) {
        console.log(e);
    }
}

export const logOut = () => (dispatch, getState, { AuthService }) => {
    AuthService.Logout();
    dispatch(setCurrentUser({}));
}

export const updateAuthStatus = () => (dispatch, getState, { AuthService }) => {
    const { status, user } = AuthService.checkAuthStatus();
    if (status) {
        dispatch(setCurrentUser(user));
    } else {
        logOut();
    }
}

export const updateToken = (newToken) => (dispatch, getState, { AuthService }) => {
    const { token } = AuthService.updateToken(newToken);
    dispatch({ type: Actions.SET_CURRENT_USER, payload: token });
}

export const setCurrentUser = (user) => ({
    type: Actions.SET_CURRENT_USER,
    payload: user
})

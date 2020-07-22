import { Actions } from "./actionTypes";
import { showAlert, showModalSuccessRegistr } from "../app/actions";
import { AlertTypes } from "../app/actionTypes";

export const register = (userDate) => async (dispatch, getState, { AuthService }) => {
    const { message, error } = await AuthService.Register(userDate);
    message ?
        dispatch(showModalSuccessRegistr())
        :
        dispatch(showAlert(error, AlertTypes.info));
}

export const logIn = (user, history) => async (dispatch, getState, { AuthService }) => {
    const { token, error } = await AuthService.Login(user);
    if (token) {
        dispatch({ type: Actions.SET_CURRENT_USER, payload: token });
        history.push("/home");
    }
    if (error) {
        dispatch(showAlert(error, AlertTypes.error));
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

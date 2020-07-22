import { Actions } from "./actionTypes";
import { updateToken } from "../auth/actions";
import { showSuccessEditUserInfo } from "../app/actions";

export const getAllUsers = () => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingUsers(true));
        const users = await UserService.GetAllUsers();
        if (users) {
            dispatch({
                type: Actions.GET_ALL,
                payload: users
            });
            dispatch(setLoadingUsers(false));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingUsers(false));
    }
}

export const setAdminUser = (usersId) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingAdmin(usersId));
        const user = await UserService.SetAdminUser(usersId);
        if (user) {
            dispatch({
                type: Actions.SET_ADMIN,
                payload: user
            });
            dispatch(setLoadingAdmin(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingAdmin(null));
    }
}

export const removeAdminUser = (usersId) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingAdmin(usersId));
        const user = await UserService.RemoveAdminUser(usersId);
        if (user) {
            dispatch({
                type: Actions.REMOVE_ADMIN,
                payload: user
            });
            dispatch(setLoadingAdmin(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingAdmin(null));
    }
}

export const blockUser = (usersId) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingBlock(usersId));
        const user = await UserService.BlockeUser(usersId);
        if (user) {
            dispatch({
                type: Actions.BLOCK_USER,
                payload: user
            });
            dispatch(setLoadingBlock(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingBlock(null));
    }
}

export const unlockedUser = (usersId) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingBlock(usersId));
        const user = await UserService.UnlockUser(usersId);
        if (user) {
            dispatch({
                type: Actions.UNLOCK_USER,
                payload: user
            });
            dispatch(setLoadingBlock(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingBlock(null));
    }
}

export const deleteUser = (usersId) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setLoadingRemove(usersId));
        const user = await UserService.RemoveUser(usersId);
        if (user) {
            dispatch({
                type: Actions.REMOVE,
                payload: user
            });
            dispatch(setLoadingRemove(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingRemove(null));
    }
}

export const changeUserInfo = (user) => async (dispatch, getState, { UserService }) => {
    try {
        dispatch(setChangeUserInfoLoading(true));
        const { token } = await UserService.ChangeUserInfo(user);
        if (token) {
            dispatch(updateToken(token));
            dispatch(setChangeUserInfoLoading(false));
            dispatch(showSuccessEditUserInfo(true));
        }
    } catch (e) {
        console.log(e);
        dispatch(setChangeUserInfoLoading(true));
    }
}

const setChangeUserInfoLoading = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.CHANGE_USER_INFO_LOADING,
        payload: isLoading
    });
}

const setLoadingUsers = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.LOADING_USERS,
        payload: isLoading
    })
}
const setLoadingAdmin = (userId) => (dispatch) => {
    dispatch({
        type: Actions.ADMIN_LOADING,
        payload: userId
    })
}
const setLoadingBlock = (userId) => (dispatch) => {
    dispatch({
        type: Actions.BLOCK_LOADING,
        payload: userId
    })
}
const setLoadingRemove = (userId) => (dispatch) => {
    dispatch({
        type: Actions.REMOVE_LOADING,
        payload: userId
    })
}

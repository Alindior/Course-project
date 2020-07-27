import { Actions } from "./actionTypes";


export const showAlert = (text, type) => (dispatch) => {
    dispatch({
        type: Actions.SHOW_ALERT,
        payload: { text, type },
    });
    setTimeout(() => {
        dispatch(hideAlert());
    }, 4000);
}

export const showFormAddComment = (isShow) => (dispatch) => {
    dispatch({
        type: Actions.FORM_ADD_COMMENT,
        payload: isShow
    })
}

export const showSuccessEditUserInfo = (isShow) => (dispatch) => {
    dispatch({
        type: Actions.SUCCEESS_EDITED_USER,
        payload: isShow
    })
}

export const toggleModalEditUserInfo = () => (dispatch) => {
    dispatch({
        type: Actions.TOGGLE_EDIT_USER_MODAL
    })
}

export const hideAlert = () => {
    return {
        type: Actions.HIDE_ALERT,
    };
}

export const showModalSuccessRegistr = () => (dispatch) => {
    dispatch({
        type: Actions.SUCCEESS_REGISTR
    })
}

export const hideModalSuccessRegistr = () => (dispatch) => {
    dispatch({
        type: Actions.HIDE_SUCCEESS_REGISTR
    })
}

export const openSideMenu = () => (dispatch) => {
    dispatch({
        type: Actions.OPEN_MENU
    })
}

export const changeTheme = () => (dispatch, getState) => {
    dispatch({
        type: Actions.CHANGE_THEME,
    });
    localStorage.setItem("theme", getState().app.theme === "dark" ? "dark" : "light");
}

export const changeLanguage = () => (dispatch, getState) => {
    dispatch({
        type: Actions.CHANGE_LANGUAGE
    })
    localStorage.setItem("language", getState().app.language === "ru" ? "ru" : "en");
}

export const updateTheme = (theme) => (dispath, getState) => {
    dispath({
        type: Actions.SET_LANGUAGE,
        payload: theme
    })
}

export const updateLanguage = (language) => (dispatch) => {
    dispatch({
        type: Actions.SET_THEME,
        payload: language
    })
}

export const toggleFormUpdateChapter = (chaptersId) => (dispatch) => {
    dispatch({
        type: Actions.FORM_UPDATE_CHAPTER,
        payload: chaptersId

    })
}

export const toggleFormAddChapter = () => (dispatch) => {
    dispatch({
        type: Actions.FORM_ADD_CHAPTER
    })
}
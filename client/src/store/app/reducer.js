import { Actions } from "./actionTypes";

const initialState = {
    alert: null,
    complitadRegistration: false,
    menuOpened: true,
    editUserInfoModal: false,
    succeessEditetUser: false,
    formAddComment: false,
    theme: localStorage.theme ? localStorage.theme : "light",
    language: localStorage.language ? localStorage.language : "ru",
    formUpdateChapter: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.FORM_UPDATE_CHAPTER:
            return { ...state, formUpdateChapter: action.payload }
        case Actions.SHOW_ALERT:
            return { ...state, alert: action.payload };
        case Actions.HIDE_ALERT:
            return { ...state, alert: null };
        case Actions.SUCCEESS_REGISTR:
            return { ...state, complitadRegistration: true }
        case Actions.HIDE_SUCCEESS_REGISTR:
            return { ...state, complitadRegistration: false }
        case Actions.OPEN_MENU:
            return { ...state, menuOpened: !state.menuOpened }
        case Actions.TOGGLE_EDIT_USER_MODAL:
            return { ...state, editUserInfoModal: !state.editUserInfoModal }
        case Actions.SUCCEESS_EDITED_USER:
            return { ...state, succeessEditetUser: action.payload }
        case Actions.FORM_ADD_COMMENT:
            return { ...state, formAddComment: action.payload }
        case Actions.CHANGE_THEME:
            return { ...state, theme: state.theme === "light" ? "dark" : "light" }
        case Actions.CHANGE_LANGUAGE:
            return { ...state, language: state.language === "ru" ? "en" : "ru" }
        case Actions.SET_THEME:
            return { ...state, theme: action.payload }
        case Actions.SET_LANGUAGE:
            return { ...state, language: action.payload }
        default:
            return state;
    }
};
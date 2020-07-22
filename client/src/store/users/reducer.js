import { Actions } from "./actionTypes";

const initialState = {
    users: [],
    usersIsLoading: false,
    isLoadingAdmin: null,
    isLoadingBlock: null,
    isLoadingRemove: null,
    isLoadingChangeUserInfo: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_ALL:
            return { ...state, users: action.payload }
        case Actions.LOADING_USERS:
            return { ...state, usersIsLoading: action.payload }
        case Actions.ADMIN_LOADING:
            return { ...state, isLoadingAdmin: action.payload }
        case Actions.BLOCK_LOADING:
            return { ...state, isLoadingBlock: action.payload }
        case Actions.REMOVE_LOADING:
            return { ...state, isLoadingRemove: action.payload }
        case Actions.REMOVE:
            return { ...state, users: [...state.users.filter((user) => user._id !== action.payload._id)] }
        case Actions.SET_ADMIN:
            return {
                ...state, users: [...state.users.map((user) => {
                    if (user._id === action.payload._id) {
                        return { ...user, admin: true }
                    } else {
                        return user;
                    }
                })]
            }
        case Actions.REMOVE_ADMIN:
            return {
                ...state, users: [...state.users.map((user) => {
                    if (user._id === action.payload._id) {
                        return { ...user, admin: false }
                    } else {
                        return user;
                    }
                })]
            }
        case Actions.BLOCK_USER:
            return {
                ...state, users: [...state.users.map((user) => {
                    if (user._id === action.payload._id) {
                        return { ...user, status: false }
                    } else {
                        return user;
                    }
                })]
            }
        case Actions.UNLOCK_USER:
            return {
                ...state, users: [...state.users.map((user) => {
                    if (user._id === action.payload._id) {
                        return { ...user, status: true }
                    } else {
                        return user;
                    }
                })]
            }
        case Actions.CHANGE_USER_INFO_LOADING:
            return { ...state, isLoadingChangeUserInfo: action.payload }
        default:
            return { ...state }
    }
}

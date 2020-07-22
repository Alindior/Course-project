import { Actions } from "./actionTypes";

const initialState = {
    isAuthenticated: false,
    user: {},
    status: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload
            }
        default:
            return state
    }
}
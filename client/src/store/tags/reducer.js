import { Actions } from "./actionTypes";

const initialState = {
    tags: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_ALL:
            return { ...state, tags: action.payload }
        default:
            return { ...state }
    }
}
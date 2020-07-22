import { Actions } from "./actionTypes";

export const getAllTags = () => async (dispatch, getState, { TagService }) => {
    try {
        const tags = await TagService.getAll();
        if (tags) {
            dispatch({
                type: Actions.GET_ALL,
                payload: tags
            })
        }
    } catch (e) {
        console.log(e);
    }
}
import { Actions } from "./actionTypes";
import { socket } from "../../sockets";
import { showFormAddComment, toggleFormUpdateChapter } from "../app/actions";

export const setLikeChapter = (booksId, chaptersId) => async (dispatch, gertState, { ChaptersService }) => {
    try {
        const book = await ChaptersService.SetLikeChapter(booksId, chaptersId);
        console.log(book);
        if (book) {
            dispatch({
                type: Actions.SET_LIKE_CHAPTER,
                payload: book
            })
        }

    } catch (e) {
        console.log(e);
    }
}

export const removeLikeChapter = (booksId, chaptersId, likesId) => async (dispatch, gertState, { ChaptersService }) => {
    try {
        const book = await ChaptersService.RemoveLikeChapter(booksId, chaptersId, likesId);
        console.log(book);
        if (book) {
            dispatch({
                type: Actions.SET_LIKE_CHAPTER,
                payload: book
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export const addBook = (book) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setLoadingCreateBook(true));
        const createdBook = await BooksService.Add(book);
        if (createdBook) {
            dispatch({
                type: Actions.ADD,
                payload: createdBook
            });
            dispatch(setLoadingCreateBook(false));
            dispatch(toggleResult());
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingCreateBook(false));
    }
}

const setLoadingCreateBook = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.SET_LOADING_CREATE_BOOK,
        payload: isLoading
    })
}

export const removeBook = (booksId) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setLoadingRemoveBook(booksId));
        const removedBook = await BooksService.RemoveOne(booksId);
        if (removedBook) {
            dispatch({
                type: Actions.REMOVE_BOOK,
                payload: booksId
            });
            dispatch(setLoadingRemoveBook(null));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingRemoveBook(null));
    }
}



export const getAllBooks = (usersId) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setBooksLoading(true));
        const books = await BooksService.GetAll(usersId);
        if (books) {
            dispatch({
                type: Actions.GET_ALL,
                payload: books
            });
        }
        dispatch(setBooksLoading(false));
    } catch (e) {
        console.log(e);
    }
}

export const getBookForOneUser = (usersId) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setBooksLoading(true));
        const books = await BooksService.GetAll(usersId);
        if (books) {
            dispatch({
                type: Actions.GET_BOOKS_FOR_ONE,
                payload: books
            });
        }
        dispatch(setBooksLoading(false));
    } catch (e) {
        console.log(e);
    }
}

export const getAllBookPublic = () => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setBooksLoading(true));
        const books = await BooksService.GetAllPublic();
        dispatch({
            type: Actions.GET_ALL_PUBLIC,
            payload: books
        })
        dispatch(setBooksLoading(false));
    } catch (e) {
        console.log(e);
        dispatch(setBooksLoading(false));
    }
}

export const addCommentToBook = (booksId, comment) => async (dispatch, getState, { CommentService }) => {
    try {
        dispatch(setLoadingComment(true));
        const newBook = await CommentService.addComment(booksId, comment);
        if (newBook) {
            dispatch({
                type: Actions.ADD_COMMENT
            });
            socket.emit("getBook", booksId);
            dispatch(setLoadingComment(false));
            dispatch(showFormAddComment(false));
        }
    } catch (e) {
        console.log(e);
        dispatch(setLoadingComment(false))
    }
}

export const addRatingToBook = (booksId, rating) => async (dispatch, getState, { RatingService }) => {
    try {
        const book = await RatingService.SetRating(booksId, rating);
        if (book) {
            dispatch({
                type: Actions.SET_RATING,
                payload: book
            })
        }
    } catch (e) {

    }
}


export const getOneById = (booksId) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setBooksLoading(true));
        const book = await BooksService.GetOne(booksId);
        if (book) {
            dispatch({
                type: Actions.GET_ONE,
                payload: book
            })
        }
        dispatch(setBooksLoading(false));
    } catch (e) {
        console.log(e);
    }
}

export const addChapter = (bookId, chapter) => async (dispatch, getState, { BooksService }) => {
    try {
        const newBook = await BooksService.AddChapter(bookId, chapter);
        dispatch({
            type: Actions.ADD_CHAPTER,
            payload: newBook
        })
        console.log(newBook);
    } catch (e) {
        console.log(e);
    }
}

export const removeChapter = (booksId, chaptersId) => async (dispatch, getState, { BooksService }) => {
    try {
        const book = await BooksService.RemoveChapter(booksId, chaptersId);
        dispatch({
            type: Actions.REMOVE_CHAPTER,
            payload: book
        })
    } catch (e) {
        console.log(e);
    }
}

export const updateChapter = (booksId, chaptersId, body) => async (dispatch, getState, { BooksService }) => {
    try {
        dispatch(setLoadingUpdateChapter(true));
        const book = await BooksService.UpdateChapter(booksId, chaptersId, body);
        if (book) {
            dispatch({
                type: Actions.ADD_CHAPTER,
                payload: book
            });
            dispatch(setLoadingUpdateChapter(false));
            dispatch(toggleFormUpdateChapter(null));
        };
    } catch (e) {
        console.log(e);
        dispatch(setLoadingUpdateChapter(false));
    }
}

const setLoadingUpdateChapter = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.CHAPTER_UPDATE_LOADING,
        payload: isLoading
    })
}

export const getReadingBook = (book) => (dispatch) => {
    dispatch({
        type: Actions.GET_BOOK_TO_READING,
        payload: book
    })
}

export const toggleResult = () => (dispatch) => {
    dispatch({
        type: Actions.SUCCEESS_ADD
    })
}

const setBooksLoading = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.BOOKS_LOADING,
        payload: isLoading
    })
};

const setReadingBookLoading = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.READING_BOOK_LOADING,
        payload: isLoading
    })
}

const setLoadingComment = (isLoading) => (dispatch) => {
    dispatch({
        type: Actions.COMMENT_LOADING,
        payload: isLoading
    })
}

export const clearReadingBook = () => (dispatch) => {
    dispatch({
        type: Actions.CLEAR_READING
    })
}

const setLoadingRemoveBook = (booksId) => (dispatch) => {
    dispatch({
        type: Actions.REMOVE_BOOK_LOADING,
        payload: booksId
    })
}

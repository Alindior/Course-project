import { Actions } from "./actionTypes";

const initialState = {
    books: [],
    statusCreated: false,
    isLoading: false,
    bookToEdit: null,
    readingBook: null,
    readingLoading: false,
    isLoadingCommit: false,
    isLoadingUpdateChapter: false,
    publicBooks: [],
    booksForOne: [],
    isLoadingRemoveBool: null,
    isLoadingCreateBook: false,
    isLoadingAddChapter: false,
    isLoadingRemoveChapter: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.REMOVE_CHAPTER_LOADING:
            return { ...state, isLoadingRemoveChapter: action.payload }
        case Actions.ADD_CHAPTER_LOADING:
            return { ...state, isLoadingAddChapter: action.payload }
        case Actions.SET_LOADING_CREATE_BOOK:
            return { ...state, isLoadingCreateBook: action.payload }
        case Actions.SET_LIKE_CHAPTER:
            return { ...state, readingBook: action.payload }
        case Actions.REMOVE_LIKE_CHAPTER:
            return { ...state, readingBook: action.payload }
        case Actions.GET_ALL_PUBLIC:
            return { ...state, publicBooks: action.payload }
        case Actions.ADD:
            return { ...state, books: [...state.books, action.payload] }
        case Actions.SUCCEESS_ADD:
            return { ...state, statusCreated: !state.statusCreated }
        case Actions.GET_ALL:
            return { ...state, books: action.payload }
        case Actions.BOOKS_LOADING:
            return { ...state, isLoading: action.payload }
        case Actions.REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book._id !== action.payload),
                booksForOne: state.booksForOne.filter((book) => book._id !== action.payload)
            }
        case Actions.GET_ONE:
            return { ...state, bookToEdit: action.payload }
        case Actions.ADD_CHAPTER:
            return { ...state, bookToEdit: action.payload }
        case Actions.ADD_COMMENT:
            return { ...state }
        case Actions.GET_BOOK_TO_READING:
            return { ...state, readingBook: action.payload }
        case Actions.SET_RATING:
            return { ...state, readingBook: action.payload }
        case Actions.READING_BOOK_LOADING:
            return { ...state, readingLoading: action.payload }
        case Actions.CLEAR_READING:
            return { ...state, readingBook: null }
        case Actions.REMOVE_CHAPTER:
            return { ...state, bookToEdit: action.payload }
        case Actions.COMMENT_LOADING:
            return { ...state, isLoadingCommit: action.payload }
        case Actions.UPDATE_CHAPTER:
            return { ...state, bookToEdit: action.payload }
        case Actions.CHAPTER_UPDATE_LOADING:
            return { ...state, isLoadingUpdateChapter: action.payload }
        case Actions.GET_BOOKS_FOR_ONE:
            return { ...state, booksForOne: action.payload }
        case Actions.REMOVE_BOOK_LOADING: {
            return { ...state, isLoadingRemoveBool: action.payload }
        }
        default:
            return { ...state }
    }
}
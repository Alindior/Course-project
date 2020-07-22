import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ReadingMode } from "./ReadingMode";
import { socket } from "../../sockets";

import { getReadingBook, clearReadingBook } from "../../store/books/actions";

export const ReadingModeContainer = ({ booksId }) => {
    const dispatch = useDispatch();
    const { readingBook } = useSelector((state) => state.books);
    const history = useHistory();
    const onCancel = () => {
        history.goBack();
        dispatch(clearReadingBook());
    }
    useEffect(() => {
        socket.emit("getBook", booksId);
        socket.on("send book", (data) => {
            dispatch(getReadingBook(data));
        })
    }, [booksId]);

    return <ReadingMode book={readingBook} onCancel={onCancel} />
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditBook } from "../../components/AuthPages/editBook/EditBook";
import { Loader } from "../../components/Loader";
import { getOneById } from "../../store/books/actions";
import { toggleFormAddChapter } from "../../store/app/actions";

export const EditBookContainer = () => {
    const dispatch = useDispatch();
    const { books, app } = useSelector((state) => state);
    const { id } = useParams();
    const toggleForm = () => {
        dispatch(toggleFormAddChapter());
    }
    useEffect(() => {
        document.title = "Редактировать";
        dispatch(getOneById(id));
    }, [id]);
    return (
        books.bookToEdit && books.bookToEdit._id === id
            ?
            <EditBook
                book={books.bookToEdit}
                form={app.formAddChapter}
                toggleForm={toggleForm}
            />
            :
            <Loader />
    )
}
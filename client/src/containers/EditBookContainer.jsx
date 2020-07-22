import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { EditBook } from "../components/AuthPages/editBook";
import { Loader } from "../components/Loader";
import { getOneById } from "../store/books/actions";

export const EditBookContainer = () => {
    const dispatch = useDispatch();
    const { isLoading, bookToEdit } = useSelector((state) => state.books);
    const { id } = useParams();
    useEffect(() => {
        document.title = "Редактировать";
        dispatch(getOneById(id));
    }, []);
    return (
        <div className="edit__container">
            {isLoading && <Loader />}
            {bookToEdit && <EditBook book={bookToEdit} />}
        </div>
    )
}
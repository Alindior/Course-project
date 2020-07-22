import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CommentsList } from "./CommentsList";
import { FormAddComment } from "./FormAddComment";

import { showFormAddComment } from "../../../store/app/actions";


export const BookFooter = ({ book }) => {
    const dispatch = useDispatch();
    const { app, auth } = useSelector((state) => state);
    const toggleFormAddComment = () => {
        dispatch(showFormAddComment(!app.formAddComment));
    }
    return (
        <>
            <CommentsList book={book} />
            {auth.isAuthenticated && <FormAddComment {...book} form={app.formAddComment} toggleForm={toggleFormAddComment} />}
        </>
    )
}
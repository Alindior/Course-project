import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { PublicBooks } from "../components/PublicBooks";
import { ReadingModeContainer } from "../components/readingMode";
import { Loader } from "../components/Loader";
import { Header } from "../components/Header"
import { getAllBookPublic } from "../store/books/actions";

export const BooksContainer = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth)
    const { publicBooks, isLoading } = useSelector((state) => state.books);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getAllBookPublic());
    }, []);
    return (
        <div className="books__container">
            <Header auth={isAuthenticated} />
            <div className="books__wrapper">
                {isLoading ? <Loader /> : <PublicBooks books={publicBooks} />}
            </div>
            {id && <ReadingModeContainer booksId={id} />}
        </div>
    )
}
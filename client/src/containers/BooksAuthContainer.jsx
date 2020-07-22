import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { PublicBooks } from "../components/PublicBooks";
import { ReadingModeContainer } from "../components/readingMode";
import { Loader } from "../components/Loader";
import { getAllBookPublic } from "../store/books/actions";


export const BooksAuthContainer = () => {
    const dispatch = useDispatch();
    const { books, app } = useSelector((state) => state);
    const { id } = useParams();
    useEffect(() => {
        document.title = "Книги";
        dispatch(getAllBookPublic());
    }, []);
    return (
        <div>
            <div className="book__wrapper">
                {books.isLoading ? <Loader /> : <PublicBooks books={books.publicBooks} language={app.language} />}
            </div>
            {id && <ReadingModeContainer booksId={id} />}
        </div>
    )
}
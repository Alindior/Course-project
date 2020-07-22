import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { HomeHeaderContainer, PersonalBooks } from "../components/AuthPages/home";
import { ReadingModeContainer } from "../components/readingMode";
import { Loader } from "../components/Loader";
import { getAllBooks } from "../store/books/actions";


export const HomeContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { books, app, auth } = useSelector((state) => state);
    useEffect(() => {
        document.title = auth.user.login;
        dispatch(getAllBooks(auth.user.id));
    }, []);
    return (
        <div className="home__container">
            <HomeHeaderContainer counterBooks={books.books.length} />
            {books.isLoading ? <Loader /> : <PersonalBooks books={books.books} language={app.language} />}
            {id && <ReadingModeContainer booksId={id} />}
        </div>
    );
}
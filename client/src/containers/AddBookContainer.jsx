import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { FormAddBook } from "../components/AuthPages/addBook";
import { ResultPAge } from "../components/ResultPage";
import { getAllTags } from "../store/tags/actions";

export const AddBookContainer = () => {
    const dispatch = useDispatch();
    const { books, app } = useSelector((state) => state);
    useEffect((() => {
        document.title = "Добавить книгу";
        dispatch(getAllTags());
    }), []);
    return (
        <>
            {books.statusCreated ? <ResultPAge /> : (
                <div className={
                    classNames("addBook__container",
                        { "addBook__container-dark": app.theme === "dark" }
                    )
                } >
                    <div className="auth__top addBook-title">
                        <h2>{app.language === "ru" ? "Создать книгу" : "Create book"}</h2>
                        <p> {app.language === "ru" ? "Тут вы можете создать новую книгу"
                            :
                            "Here you can create a new book"}
                        </p>
                    </div>
                    <div className="addBook__form">
                        <FormAddBook language={app.language} />
                    </div>
                </div>)
            }
        </>
    )
}
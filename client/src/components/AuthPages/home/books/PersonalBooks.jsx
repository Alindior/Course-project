import React from "react";

import { BooksWrapper } from "../../../booksWrapper/BooksWrapper";
import { columns } from "./columns";

export const PersonalBooks = ({ books, language }) => {
    return (
        <BooksWrapper columns={columns} books={books} language={language} />
    )
}
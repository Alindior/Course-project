import React from "react";

import { BooksWrapper } from "../booksWrapper/BooksWrapper";
import { columns } from "./columns";

export const PublicBooks = ({ books, language }) => {
    return <BooksWrapper books={books} columns={columns} language={language} />
}
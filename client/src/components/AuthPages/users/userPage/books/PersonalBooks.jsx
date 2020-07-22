import React from "react";

import { BooksWrapper } from "../../../../booksWrapper/BooksWrapper";
import { Loader } from "../../../../../components/Loader";
import { columns } from "./columns";

export const PersonalBooks = ({ books, login, isLoading }) => {
    return (
        isLoading ? <Loader /> : <BooksWrapper columns={columns} books={books} login={login} />
    )
}
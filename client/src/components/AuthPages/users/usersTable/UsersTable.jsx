import React from "react";

import { BooksWrapper } from "../../../booksWrapper/BooksWrapper";
import { columns } from "./columns";

export const UsersTable = ({ users, theme, language }) => {
    return (
        <div className="users__container">
            <BooksWrapper
                columns={columns}
                books={users}
                language={language}
            />
        </div>
    );
}

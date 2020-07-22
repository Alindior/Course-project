import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { Table } from 'antd';
import { BooksWrapper } from "../../../booksWrapper/BooksWrapper";
import { columns } from "./columns";

export const UsersTable = ({ users, theme, language }) => {
    return (
        <>
            <BooksWrapper
                columns={columns}
                books={users}
                language={language}
            />
        </>
    );
}

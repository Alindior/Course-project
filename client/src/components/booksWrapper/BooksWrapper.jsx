import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';
import classNames from "classnames";

import { getAllTags } from "../../store/tags/actions";

export const BooksWrapper = ({ books, columns, language }) => {
    let [filteredInfo, setFilteredInfo] = useState(null);
    let [sortedInfo, setSortedInfo] = useState(null);
    const { tags, app } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTags());
    }, []);
    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    return (
        <Table
            className={classNames(
                { "books__theme-dark": app.theme === "dark", "books__theme-light": app.theme === "light" })}
            columns={columns(sortedInfo, filteredInfo, tags.tags, language)}
            dataSource={books}
            onChange={handleChange}
        />
    );
}

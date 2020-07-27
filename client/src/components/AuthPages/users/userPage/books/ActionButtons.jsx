import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { Button } from "antd";
import { DeleteOutlined, EditFilled, ReadOutlined } from '@ant-design/icons';

import { removeBook } from "../../../../../store/books/actions";

export const ActionButtons = ({ bookId }) => {
    const dispatch = useDispatch();
    const { login } = useParams();
    const onDelete = () => {
        dispatch(removeBook(bookId));
    }
    return (
        <div className="userPage__btns">
            <Button type="primary" className="action__btn"><Link to={`/users/${login}/${bookId}`}><ReadOutlined /></Link></Button>
            <Button type="primary" className="action__btn"><Link to={`/edit/${bookId}`}><EditFilled /></Link></Button>
            <Button type="primary" danger className="action__btn" onClick={onDelete}><DeleteOutlined /></Button>
        </div>
    )
}
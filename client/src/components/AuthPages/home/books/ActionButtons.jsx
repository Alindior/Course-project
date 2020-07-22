import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from "antd";
import { DeleteOutlined, EditFilled, ReadOutlined, LoadingOutlined } from '@ant-design/icons';

import { removeBook } from "../../../../store/books/actions";

export const ActionButtons = ({ bookId }) => {
    const { isLoadingRemoveBool } = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(removeBook(bookId));
    }
    return (
        <div className="actions__btn-personal">
            <Button type="primary" className="action__btn">
                <Link to={`/home/${bookId}`}>
                    <ReadOutlined />
                </Link>
            </Button>
            <Button type="primary" className="action__btn">
                <Link to={`/edit/${bookId}`}>
                    <EditFilled />
                </Link>
            </Button>
            <Button type="primary" danger className="action__btn" onClick={onDelete}>
                {isLoadingRemoveBool === bookId ? <LoadingOutlined /> : <DeleteOutlined />}
            </Button>
        </div>
    )
}
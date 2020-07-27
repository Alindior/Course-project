import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { DeleteOutlined, EditFilled, LoadingOutlined } from '@ant-design/icons';

import { removeChapter } from "../../../../../store/books/actions";

export const ActionButtons = ({ chaptersId, booksId, order, title, toggleForm }) => {
    const dispatch = useDispatch();
    const { isLoadingRemoveChapter } = useSelector((state) => state.books);
    const onDelete = () => {
        dispatch(removeChapter(booksId, chaptersId))
    };
    return (
        <div className="btns__edit-chapter">
            <div className="chapter__title">Глава {order}. {title}</div>
            <Button type="primary" className="action__btn" size="small" onClick={toggleForm}><EditFilled /></Button>
            <Button type="primary" danger className="action__btn" size="small" onClick={onDelete}>
                {isLoadingRemoveChapter === chaptersId ? <LoadingOutlined /> : <DeleteOutlined />}
            </Button>
        </div>
    )
}
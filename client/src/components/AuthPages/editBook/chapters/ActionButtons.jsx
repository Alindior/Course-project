import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { DeleteOutlined, EditFilled, ReadOutlined } from '@ant-design/icons';

import { removeChapter } from "../../../../store/books/actions";

export const ActionButtons = ({ chaptersId, booksId, order, title, toggleForm }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(removeChapter(booksId, chaptersId))
    }
    return (
        <div>
            {`Глава ${order}. ${title}  `}
            <Button type="primary" className="action__btn" size="small" onClick={toggleForm}><EditFilled /></Button>
            <Button type="primary" danger className="action__btn" size="small" onClick={onDelete}><DeleteOutlined /></Button>
        </div>
    )
}
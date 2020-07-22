import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "antd";
import { ReadOutlined } from '@ant-design/icons';


export const ActionButtons = ({ bookId }) => {
    return (
        <div className="actions__btn-public">
            <Button type="primary" className="action__btn"><Link to={`/books/${bookId}`}><ReadOutlined /></Link></Button>
        </div>
    )
}
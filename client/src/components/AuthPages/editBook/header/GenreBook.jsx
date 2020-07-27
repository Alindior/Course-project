import React from 'react';
import { Descriptions, Tag } from "antd";

export const GenreBook = ({ genre }) => {
    return (
        <Descriptions title="Жанр">
            <Descriptions.Item>
                <Tag color="#108ee9">{genre}</Tag>
            </Descriptions.Item>
        </Descriptions>
    )
}
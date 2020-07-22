import React from "react";
import { useSelector } from "react-redux"
import { Descriptions, Card } from 'antd';

import { Likes } from "./Likes";

export const ChapterItem = ({ title, image, content, booksId, _id, order, likes }) => {
    const { user } = useSelector((state) => state.auth);
    const isLiked = likes.find((like) => like.user === user.id)
    return (
        <div key={_id}>
            <a id={order} />
            <Descriptions title={`Глава ${order}. ${title}`} />
            <Card
                bordered={false}
                size="small"
                style={{ width: 240, height: "auto" }}
                cover={<img alt="example" src={image} />}
            />
            <Descriptions.Item>
                {content}
            </Descriptions.Item>
            <Likes counter={likes.length} isLiked={isLiked} chapterId={_id} booksId={booksId} />
        </div>
    )
}
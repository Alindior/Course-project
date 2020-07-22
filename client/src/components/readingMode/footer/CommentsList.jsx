import React from "react";
import { Comment, List, Avatar } from 'antd';
import { Rating } from "./Rating";
import { UserOutlined } from '@ant-design/icons';

export const CommentsList = ({ book }) => {
    return (
        <List
            className="comment-list"
            header={<Rating {...book} />}
            itemLayout="horizontal"
            dataSource={book.comments}
            renderItem={item => (
                <li>
                    <Comment
                        author={item?.author?.login}
                        avatar={
                            <Avatar size={40} icon={<UserOutlined />} />
                        }
                        content={item.body}
                        key={item._id}
                    />
                </li>
            )}
        />
    )
}

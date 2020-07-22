import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Descriptions } from 'antd';
import { HeartFilled, HeartTwoTone } from '@ant-design/icons';

import { setLikeChapter, removeLikeChapter } from "../../../store/books/actions";

export const Likes = ({ counter, isLiked, chapterId, booksId, }) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const onLike = () => {
        if (isLiked) {
            dispatch(removeLikeChapter(booksId, chapterId, isLiked._id));
        } else {
            dispatch(setLikeChapter(booksId, chapterId));
        }
    }
    return (
        isAuthenticated ?
            (<Descriptions>
                <Descriptions.Item className="likes__counter">
                    <span className="like__counter">{counter}</span>
                    {isLiked ?
                        <span className="wrapper__likes"><HeartFilled className="chapter__like" onClick={onLike} /></span>
                        :
                        <span className="wrapper__likes"><HeartTwoTone className="chapter__like" onClick={onLike} /></span>}
                </Descriptions.Item>
            </Descriptions>)
            : null
    )
}
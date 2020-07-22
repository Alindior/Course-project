import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rate } from 'antd';

import { addRatingToBook } from "../../../store/books/actions";

export const Rating = ({ rating, _id }) => {
    const dispath = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const currentValue = rating.find((rate) => rate.author === user.id);
    const isDisabled = currentValue ? true : false;
    return (
        isAuthenticated ? <Rate
            allowHalf
            defaultValue={currentValue ? currentValue.value : 0}
            disabled={isDisabled}
            onChange={(value) => {
                dispath(addRatingToBook(_id, value))
            }} /> : null
    );
}
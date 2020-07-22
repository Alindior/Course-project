import React from "react";

import { Rate } from 'antd';

export const Rating = ({ rating }) => {
    return <Rate disabled defaultValue={rating} />;
}
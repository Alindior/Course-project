import React from 'react';
import { Alert } from 'antd';

export const AlertApp = ({ text, type }) => {
    return (
        <Alert
            message={text}
            description="__________"
            showIcon
            type={type}
            style={{ textAlign: "center" }}
        />
    )
}
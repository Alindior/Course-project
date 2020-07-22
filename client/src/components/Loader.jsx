import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined spin />;


export const Loader = () => {
    return (
        <div className="loader__container">
            <Spin indicator={antIcon} />
        </div>
    )
};
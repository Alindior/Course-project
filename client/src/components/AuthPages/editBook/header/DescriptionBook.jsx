import React from "react";
import { Descriptions } from 'antd';

export const DescriptionBook = ({ description }) => {
    return (
        <div>
            <a id="content" />
            <Descriptions title="Описание">
                <Descriptions.Item>
                    {description}
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}
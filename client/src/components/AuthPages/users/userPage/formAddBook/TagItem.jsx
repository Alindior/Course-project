import React, { useState } from "react";

import { Tag } from 'antd';

export const TagItem = ({ text, removeTag }) => {
    const [visible, setVisible] = useState(true);
    const closeTag = () => {
        setVisible(!visible);
        removeTag(text);
    }
    return (
        <>
            <Tag
                closable
                visible={visible}
                onClose={closeTag}
                color="blue"
            >
                {text}
            </Tag>
        </>
    );
}
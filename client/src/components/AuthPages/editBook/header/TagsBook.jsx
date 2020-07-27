import React from "react";
import { Descriptions, Tag } from "antd";

export const TagsBook = ({ tags }) => {
    const isEmpty = tags.length === 0;
    return (
        <Descriptions title="Теги">
            <Descriptions.Item>
                {isEmpty
                    ?
                    "Автор не пометил это произведения Тегами"
                    :
                    (
                        <>
                            {tags.map((tag) => <Tag color="blue">{tag}</Tag>)}
                        </>
                    )}
            </Descriptions.Item>
        </Descriptions>
    )
}
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { TagItem } from "./TagItem";
import { AutocompliteTags } from "./AutocompliteTags";


export const AddFieldTag = ({ addTag, currentTags, removeTag }) => {
    const [tag, setTag] = useState("");
    const [add, setAdd] = useState(false);
    const onChangeTag = (tag) => setTag(tag);
    const onFinish = () => {
        addTag(tag);
        onShowInput();
        setTag("");
    };
    const onShowInput = () => setAdd(!add);
    return (
        <>
            <Form onFinish={onFinish}>
                {currentTags.map((tag, i) => <TagItem text={tag} key={i} removeTag={removeTag} />)}
                {add ?
                    <Input.Group compact style={{ marginTop: "5px" }}>
                        <AutocompliteTags onChangeTag={onChangeTag} tag={tag} removeTag={removeTag} />
                        <Form.Item>
                            <Button disabled={!tag} htmlType="submit"> Добавить Тэг</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={onShowInput}>Отмена</Button>
                        </Form.Item>
                    </Input.Group> :
                    <Form.Item>
                        <Button onClick={onShowInput} type="dashed">
                            <PlusOutlined /> Добавить
                        </Button>
                    </Form.Item>}
            </Form>
        </>
    );
};

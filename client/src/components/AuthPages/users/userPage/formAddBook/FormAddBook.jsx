import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from 'antd';


import { addBook } from "../../../../../store/books/actions";
import { AddFieldTag } from "./AddFieldTag";
import { InputItem } from "./InputItem";
import { GenreSelect } from "./GenreSelect";

export const FormAddBook = ({ usersId }) => {
    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);
    const addTag = (tag) => setTags([...tags, tag]);
    const removeTag = (tagForRemove) => setTags([...tags.filter((tag => tag !== tagForRemove))]);
    const onFinish = values => {
        dispatch(addBook({ ...values, tags, usersId }))
    };
    return (
        <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }}>
            <InputItem name="name" label="Название" placeholder="Введите название" />
            <InputItem name="description" label="Описание" placeholder="Введите описание" />
            <GenreSelect name="genre" label="Жанр" />
            <Form.Item label="Теги">
                <Form.Item name="tags" noStyle >
                    <AddFieldTag addTag={addTag} currentTags={tags} removeTag={removeTag} />
                </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit">
                    Submit
                 </Button>
            </Form.Item>
        </Form>
    );
};
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { addBook } from "../../../store/books/actions";
import { AddFieldTag } from "./AddFieldTag";
import { InputItem } from "./InputItem";
import { GenreSelect } from "./GenreSelect";

export const FormAddBook = ({ language }) => {
    const dispatch = useDispatch();
    const { auth, books } = useSelector((state) => state);
    const [tags, setTags] = useState([]);
    const addTag = (tag) => setTags([...tags, tag]);
    const removeTag = (tagForRemove) => setTags([...tags.filter((tag => tag !== tagForRemove))]);
    const onFinish = values => {
        dispatch(addBook({ ...values, tags, usersId: auth.user.id }))
    };
    return (
        <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }}>
            <InputItem name="name"
                label={language === "ru" ? "Название" : "Title"}
                placeholder={language === "ru" ? "Введите название" : "Input title"}

            />
            <InputItem
                name="description"
                label={language === "ru" ? "Описание" : "Description"}
                placeholder={language === "ru" ? "Введите описание" : "Input description"}

            />
            <GenreSelect
                name="genre"
                label={language === "ru" ? "Жанр" : "genre"}
            />
            <Form.Item label={language === "ru" ? "Тэги" : "Tags"}>
                <Form.Item name="tags" noStyle >
                    <AddFieldTag addTag={addTag} currentTags={tags} removeTag={removeTag} />
                </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit">
                    {books.isLoadingCreateBook ? <LoadingOutlined /> : "Создать"}
                </Button>
            </Form.Item>
        </Form>
    );
};
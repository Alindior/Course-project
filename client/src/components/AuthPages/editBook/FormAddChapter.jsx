import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Descriptions } from 'antd';

import { UploadImage } from "./UploadImage";
import { addChapter } from "../../../store/books/actions";

export const FormAddChapter = ({ onBack, booksId }) => {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(null);
    const onFinish = values => {
        if (imageUrl) {
            let date = { ...values, image: imageUrl };
            dispatch(addChapter(booksId, date))
            onBack();
        }
    };
    return (
        <>
            <Descriptions title="Добавить новую главу" />
            <Form className="addChapter__form" onFinish={onFinish} >
                <Form.Item name="title" label=" " colon={false} rules={[{ required: true, message: "Обязательно поле" }]}>
                    <Input placeholder="Введите название главы" />
                </Form.Item>
                <Form.Item name="image" label="*r" colon={false}>
                    <UploadImage addImage={setImageUrl} currentImage={imageUrl} />
                </Form.Item>
                <Form.Item name="content" label=" " colon={false} rules={[{ required: true, message: "Обязательно поле" }]}>
                    <Input.TextArea placeholder="Содержание главы" />
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit" className="create-chapter">Создать</Button>
                    <Button type="primary" onClick={onBack} >Отмена</Button>
                </Form.Item>
            </Form>
        </>
    )
}
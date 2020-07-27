import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { UploadImage } from "../content/chapters/UploadImage";
import { addChapter } from "../../../../store/books/actions";

export const FormAddChapter = ({ onBack, booksId, isLoading }) => {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState(null);
    const { isLoadingAddChapter } = useSelector((state) => state.books)
    const onFinish = values => {
        if (imageUrl) {
            let date = { ...values, image: imageUrl };
            dispatch(addChapter(booksId, date));
        }
    };
    return (
        <Form className="addChapter__form" onFinish={onFinish} >
            <Form.Item name="title" label=" " colon={false} rules={[{ required: true, message: "Обязательно поле" }]}>
                <Input placeholder="Введите название главы" />
            </Form.Item>
            <Form.Item name="image" label=" *" colon={false}>
                <UploadImage addImage={setImageUrl} currentImage={imageUrl} />
            </Form.Item>
            <Form.Item name="content" label=" " colon={false} rules={[{ required: true, message: "Обязательно поле" }]}>
                <Input.TextArea placeholder="Содержание главы" />
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit" className="create-chapter" disabled={isLoading}>
                    {isLoadingAddChapter ? <LoadingOutlined /> : "Создать"}
                </Button>
                <Button type="primary" onClick={onBack} >Отмена</Button>
            </Form.Item>
        </Form>
    )
}
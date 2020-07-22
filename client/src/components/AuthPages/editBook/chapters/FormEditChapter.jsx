import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { UploadImage } from "../UploadImage"
import { updateChapter } from "../../../../store/books/actions";
import { SelectOrder } from "./SelectOrder";

const { TextArea } = Input;

export const FormEditChapter = ({ title, image, content, order, showForm, chaptersId, booksId, chapters, onCancel }) => {
    const dispatch = useDispatch();
    const { isLoadingUpdateChapter } = useSelector((state) => state.books);
    const [imageUrl, setImageUrl] = useState(image);
    const onFinish = values => {
        const data = { ...values, image: imageUrl }
        dispatch(updateChapter(booksId, chaptersId, data));
    };
    return (
        <>
            <a id={order} />
            <Form className="addChapter__form" onFinish={onFinish} >
                <SelectOrder chapters={chapters} order={order} />
                <Form.Item
                    name="title"
                    initialValue={title}
                    label=" "
                    colon={false}
                    rules={[{ required: true, message: "Обязательно поле" }]}>
                    <Input placeholder="Введите название главы" />
                </Form.Item>
                <Form.Item name="image" label="  *" colon={false}>
                    <UploadImage addImage={setImageUrl} currentImage={imageUrl} />
                </Form.Item>
                <Form.Item
                    name="content"
                    initialValue={content}
                    label=" "
                    colon={false}
                    rules={[{ required: true, message: "Обязательно поле" }]}>
                    <TextArea name="content" placeholder="Содержание главы" />
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="create-chapter"
                    >
                        {isLoadingUpdateChapter ? <LoadingOutlined /> : "Сохранить изменения"}
                    </Button>
                    <Button type="primary" onClick={onCancel} >Отмена</Button>
                </Form.Item>
            </Form>
        </>
    )
}
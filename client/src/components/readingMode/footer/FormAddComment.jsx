import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input } from 'antd';

import { addCommentToBook } from "../../../store/books/actions";
const { TextArea } = Input;

export const FormAddComment = ({ _id, form, toggleForm }) => {
    const dispatch = useDispatch();
    const { isLoadingCommit } = useSelector((state) => state.books);
    const onFinish = (values) => {
        dispatch(addCommentToBook(_id, values));
    }
    return (
        <>
            {form ?
                <>
                    <Form onFinish={onFinish}>
                        <Form.Item name="body" initialValue={""}>
                            <TextArea placeholder="Введите комментарий" defaultValue={""} />
                        </Form.Item>
                        <Button htmlType="submit" loading={isLoadingCommit} type="primary">
                            Опубликовать
                        </Button>
                        <Button type="primary" className="addCommi_btn" onClick={toggleForm}>
                            Отменить
                        </Button>
                    </Form>
                </>
                :
                <Button onClick={toggleForm} type="primary">Добавить комментарий</Button>}
        </>
    )
}

import React from 'react';
import { useDispatch } from "react-redux";
import { Form, Input, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import { changeUserInfo } from "../../../../store/users/actions";

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
};

const tailLayoutBtn = {
    wrapperCol: { offset: 18, span: 16 },
};

const validateMessages = {
    required: 'Это обязательное поле!',
};

export const EditUserForm = ({ isLoading, user }) => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(changeUserInfo(values));
    }
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            {...layout}
            validateMessages={validateMessages}
            onFinish={onFinish}
        >
            <Form.Item
                {...tailLayout}
                label="Логин"
                name="login"
                initialValue={user.login}
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Имя"
                name="name"
                rules={[{ required: true }]}
                initialValue={user.name}
            >
                <Input />
            </Form.Item>

            <Form.Item
                {...tailLayout}
                label="Фамилия"
                name="lastname"
                initialValue={user.lastname}
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayoutBtn}>
                <Button type="primary" htmlType="submit">
                    {isLoading ? <LoadingOutlined /> : "Сохранить"}
                </Button>
            </Form.Item>
        </Form>
    )
}
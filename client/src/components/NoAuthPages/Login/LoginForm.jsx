import React from 'react';
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { Form, Button, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { logIn } from "../../../store/auth/actions";

export const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onFinish = ({ email, password }) => {
        dispatch(logIn({ email, password }, history));
    };
    const validateMessages = {
        required: 'Это обязательное поле!',
        types: {
            email: "Некорректный типа Email'а",
        },
    };
    return (
        <Form
            name="normal_login"
            validateMessages={validateMessages}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[{ required: true }]}
            >
                <Input prefix={<MailOutlined />} placeholder="Login" type="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true }]}
            >
                <Input prefix={<LockOutlined />} placeholder="Password" type="password" />
            </Form.Item>
            <Form.Item className="auth__footer">
                <Button type="primary" htmlType="submit" className="login-form-button">Войти</Button>
                <p>или</p>
                <Link to="/register"> Зарегистрироваться</Link>
            </Form.Item>
        </Form>
    );
};

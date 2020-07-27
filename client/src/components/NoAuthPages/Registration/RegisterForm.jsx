import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import { register } from "../../../store/auth/actions";
import { InputItem } from "./InputItem";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const onFinish = ({ email, login, password }) => {
        dispatch(register({ email, login, password }));
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
        },
    };

    return (
        <Form
            validateMessages={validateMessages}
            onFinish={onFinish}
        >
            <InputItem
                type="email"
                placeholder="Введите Email"
                name="email" icon={<MailOutlined />}
            />
            <InputItem
                type="text"
                placeholder="Введите Login"
                name="login"
                icon={<UserOutlined />}
            />
            <InputItem
                type="password"
                placeholder="Введите Password"
                name="password"
                icon={<LockOutlined />}
            />
            <Form.Item className="auth__footer">
                <Button type="primary" htmlType="submit" className="login-form-button">Зарегистрироваться</Button>
                <p>Или</p>
                <Link to="/login">Войти</Link>
            </Form.Item>
        </Form>
    );
};

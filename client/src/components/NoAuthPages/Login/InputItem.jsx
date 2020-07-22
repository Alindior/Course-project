import React from "react";
import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from '@ant-design/icons';


export const InputItem = ({ placeholder, name, type }) => {
    const isEmail = type === "email" ? "email" : null;
    return (
        <Form.Item
            name={name}
            rules={[{ required: true, type: isEmail }]}
        >
            <Input prefix={type ? <MailOutlined /> : <LockOutlined />} placeholder={placeholder} type={type}/>
        </Form.Item>
    )
}
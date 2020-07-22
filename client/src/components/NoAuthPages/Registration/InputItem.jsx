import React from "react";
import { Form, Input } from "antd";


export const InputItem = ({ placeholder, name, type, icon }) => {
    const isEmail = type === "email" ? "email" : null;
    return (
        <Form.Item
            name={name}
            rules={[{ required: true, type: isEmail }]}
        >
            <Input prefix={icon} placeholder={placeholder} type={type} />
        </Form.Item>
    )
}
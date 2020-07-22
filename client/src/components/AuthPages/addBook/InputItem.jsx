import React from 'react';
import { Form, Input } from 'antd';


export const InputItem = ({ name, label, placeholder }) => {
    return (
        <Form.Item label={label}>
            <Form.Item
                name={name}
                noStyle
                rules={[{ required: true, message: 'Это поле должно быть заполнено' }]}
            >
                <Input placeholder={placeholder} />
            </Form.Item>
        </Form.Item>
    )
}
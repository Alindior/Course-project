import React from 'react';
import { Form, Input, Select } from "antd";

const { Option } = Select;

export const SelectOrder = ({ chapters, order }) => {
    return (
        <Form.Item label="Выберите номер главы">
            <Input.Group compact>
                <Form.Item
                    name="order"
                    noStyle
                    initialValue={order}
                    rules={[{ required: true, message: 'Province is required' }]}
                >
                    <Select placeholder="Select province">
                        {chapters.map((chapter) => <Option value={chapter.order} key={chapter._id}>{chapter.order}</Option>)}
                    </Select>
                </Form.Item>
            </Input.Group>
        </Form.Item>
    )
}
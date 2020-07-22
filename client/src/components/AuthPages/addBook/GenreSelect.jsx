import React from 'react';
import { Form, Input, Select } from 'antd';

import { genres } from "../../../utils/genres";
const { Option } = Select;

export const GenreSelect = ({ label, name }) => {
    return (
        <Form.Item label={label}>
            <Input.Group compact>
                <Form.Item
                    name={name}
                    noStyle
                    rules={[{ required: true, message: 'Province is required' }]}
                >
                    <Select placeholder="Select province">
                        {genres.map((genre) => <Option value={genre.genre} key={genre.id}>{genre.genre}</Option>)}
                    </Select>
                </Form.Item>
            </Input.Group>
        </Form.Item>
    )
}
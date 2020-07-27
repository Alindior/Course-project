import React, { useState } from "react";
import { useSelector } from 'react-redux';

import { AutoComplete } from 'antd';

const mockVal = (str, tags) => {
    let result = [];
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].name.includes(str)) {
            result.push({ value: tags[i].name });
        }
    }
    return result
};

export const AutocompliteTags = ({ onChangeTag, tag }) => {
    const { tags } = useSelector((state) => state);
    const [options, setOptions] = useState([]);

    const onSearch = searchText => {
        setOptions(
            !searchText ? [] : mockVal(searchText, tags.tags),
        );
    };
    const onSelect = data => {
        onChangeTag(data);
    };
    return (
        <div>
            <AutoComplete
                value={tag}
                options={options}
                style={{
                    width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={(e) => {
                    onChangeTag(e);
                }}
                placeholder="control mode"
            />
        </div>
    );
};
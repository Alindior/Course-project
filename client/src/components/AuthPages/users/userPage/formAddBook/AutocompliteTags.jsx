import React, { useState } from "react";

import { AutoComplete } from 'antd';
const tags = ["Апельси", "Ананас", "Яблоко", "Жолудь"]
const mockVal = (str) => {
    let result = [];
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].includes(str)) {
            result.push({ value: tags[i] });
        }
    }
    return result
};

export const AutocompliteTags = ({ onChangeTag, tag }) => {
    const [options, setOptions] = useState([]);
    const onSearch = searchText => {
        setOptions(
            !searchText ? [] : mockVal(searchText),
        );
    };
    const onSelect = data => {
        onChangeTag(data);
    };
    return (
        <>
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
        </>
    );
};
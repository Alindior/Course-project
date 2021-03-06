import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { AutoComplete } from 'antd';

const searchResult = (query, books) => {
    return books.filter((book) => {
        const { name, description, chapters } = book;
        let filteredChapters = chapters.filter((chapter) => {
            const { title, content } = chapter;
            if (title.includes(query) || content.includes(query)) {
                return chapter;
            }
        });

        if (name.includes(query) || name.includes(description) || filteredChapters.length !== 0) {
            return { ...book };
        }
    }).map((item, idx) => {
        return {
            label: (
                <Link to={`/books/${item._id}`} >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            {item.name}
                        </span>
                    </div>
                </Link>
            ),
        };
    });
}

export const Autocomplite = () => {
    const [options, setOptions] = useState([]);
    const { books } = useSelector((state) => state);
    const handleSearch = value => {
        setOptions(value ? searchResult(value, books.publicBooks) : []);
    };

    const onSelect = value => {
        console.log('onSelect', value);
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 300,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            enterButton
        >
        </AutoComplete>
    );
};
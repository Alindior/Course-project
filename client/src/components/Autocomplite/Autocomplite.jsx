import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Input, AutoComplete } from 'antd';

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
            return { ...book, result: "Жопа" };
        }
    }).map((item, idx) => {
        return {
            // value: idx,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>
                        <Link
                            to={`/books/${item._id}`}
                        >
                            {item.name}
                        </Link>
                    </span>
                </div>
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
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};
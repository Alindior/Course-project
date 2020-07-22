import React from "react";
import { Tag } from 'antd';
import { Rating } from "./Rating";
import { ActionButtons } from "./ActionButtons";
import { genres } from "../../../../utils/genres";



export const columns = (sortedInfo, filteredInfo, tags, language) => {
    return [
        {
            title: language === "ru" ? "Название" : "Title",
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            ellipsis: true
        },
        {
            title: language === "ru" ? "Тэги" : "Tags",
            dataIndex: "tags",
            key: 'tags',
            filters: tags.map((tag) => ({ "text": tag.name, "value": tag.name })),
            filteredValue: filteredInfo.tags || null,
            onFilter: (value, record) => record.tags.includes(value),
            render: tags => (
                <>
                    {tags.map(tag => {
                        return (
                            <Tag color="blue" key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: language === "ru" ? "Жанр" : "Genre",
            dataIndex: 'genre',
            key: 'genre',
            filters: [
                ...genres.map((genre) => ({ text: genre.genre, value: genre.genre }))
            ],
            filteredValue: filteredInfo.genre || null,
            onFilter: (value, record) => record.genre.includes(value),
            sorter: (a, b) => a.genre.length - b.genre.length,
            sortOrder: sortedInfo.columnKey === 'genre' && sortedInfo.order,
            render: genre => (
                <>
                    <Tag color="blue" key={genre}>
                        {genre.toUpperCase()}
                    </Tag>
                </>
            ),
            ellipsis: true,
        },
        {
            title: language === "ru" ? "Рейтинг" : "Rating",
            dataIndex: "avarageRating",
            key: 'avarageRating',
            sorter: (a, b) => a.rating - b.rating,
            sortOrder: sortedInfo.columnKey === 'rating' && sortedInfo.order,
            render: (avarageRating) => {
                return (
                    <>
                        <Rating rating={avarageRating} key={avarageRating} />
                    </>
                )
            },
            ellipsis: true
        },
        {
            title: language === "ru" ? "Действия" : "Actions",
            dataIndex: "_id",
            key: "actions",
            render: (id) => <ActionButtons bookId={id} key={id} />
        },
    ];
}
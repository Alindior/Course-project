import React from "react";
import { Tag } from 'antd';
import { Rating } from "./Rating";
import { ActionButtons } from "./ActionButtons";
import { genres } from "../../../../../utils/genres";

const tags = ["жопа", "апельсин", "лимон"];


export const columns = (sortedInfo, filteredInfo) => {
    return [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            ellipsis: true
        },
        {
            title: 'Тэги',
            dataIndex: "tags",
            key: 'tags',
            filters: tags.map((tag) => ({ "text": tag, "value": tag })),
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
            title: 'Жанр',
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
            title: "Рейтинг",
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
            title: "Действия",
            dataIndex: "_id",
            key: "actions",
            render: (id) => <ActionButtons bookId={id} key={id} />
        },
    ];
}
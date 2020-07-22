import React from "react";
import { Descriptions } from 'antd';
import { DescriptionBook } from "./DescriptionBook";
import { TagsBook } from "./TagsBook";
import { GenreBook } from "./GenreBook";

export const BookHeader = ({ name, tags, genre, description }) => {
    return (
        <>
            <Descriptions title={name} href="title" />
            <TagsBook tags={tags} />
            <GenreBook genre={genre} />
            <DescriptionBook description={description} />
        </>
    )
}
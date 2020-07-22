import React from "react";


import { ChapterItem } from "./ChapterItem";

export const ChaptersList = ({ chapters, _id }) => {
    return (
        chapters.map((chapter, index) => (
            <ChapterItem {...chapter} order={index + 1} booksId={_id} />
        ))
    )
}
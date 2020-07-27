import React from 'react';
import { ChapterItem } from "./ChapterItem";

export const ChapterList = ({ chapters, booksId }) => {
    return (
        <div className="chapters__container">
            {
                chapters.map((chapter) => {
                    return (
                        <ChapterItem {...chapter} order={chapter.order} booksId={booksId} key={chapter._id} chapters={chapters} />
                    )
                })
            }
        </div>
    )
}
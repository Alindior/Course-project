import React from "react";

import { BookHeader } from "./header";
import { ChaptersList } from "./ChaptersList";
import { ContentOfBook } from "./ContentOfBook";
import { BookFooter } from "../footer";

export const BookContent = ({ book }) => {
    return (
        <>
            <div className="chapters__map">
                <ContentOfBook {...book} />
            </div>
            <div className="book__content">
                <BookHeader {...book} />
                <ChaptersList {...book} />
                <BookFooter book={book} />
            </div>
        </>
    )
}
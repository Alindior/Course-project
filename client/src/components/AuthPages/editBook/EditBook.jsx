import React, { useState } from "react";
import { Button } from 'antd';

import { FormAddChapter } from "./FormAddChapter";
import { MapChapters } from "./MapChapters";
import { ChapterList } from "./chapters/ChaptersList";
import { BookHeader } from "./BookHeader";

export const EditBook = ({ book }) => {
    const { _id, chapters } = book;
    const [form, setForm] = useState(false);    
    const onBack = () => setForm(!form);
    return (
        <>
            <div className="map__content">
                <MapChapters chapters={chapters} />
            </div>
            <div className="edit__book">
                <BookHeader {...book} />
                <ChapterList chapters={chapters} booksId={_id} />
                {form && <FormAddChapter onBack={onBack} booksId={_id} />}
                {!form && <Button type="primary" onClick={onBack} className="addChapter_btn">Добавить главу</Button>}
            </div>
        </>
    )
}
import React from "react";
import { Button } from 'antd';

import { FormAddChapter } from "./content/FormAddChapter";
import { ContentOfBook } from "./content/ContentOfBook";
import { ChapterList } from "./content/chapters/ChaptersList";
import { BookHeader } from "./header/BookHeader";

import { ModalItem } from "../../ModalItem";

export const EditBook = ({ book, form, toggleForm }) => {
    const { _id, chapters } = book;
    return (
        <div className="edit__container">
            <div className="map__content">
                <ContentOfBook chapters={chapters} />
            </div>
            <div className="edit__book">
                <BookHeader {...book} />
                {form
                    &&
                    <ModalItem close={toggleForm} isShow={form} title="Добавить новую главу">
                        <FormAddChapter onBack={toggleForm} booksId={_id}/>
                    </ModalItem>
                }
                <Button type="primary" onClick={toggleForm} className="addChapter_btn">Добавить главу</Button>
                <ChapterList chapters={chapters} booksId={_id} />
            </div>
        </div>
    )
}
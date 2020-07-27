import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Descriptions, Card } from 'antd';

import { ActionButtons } from "./ActionButtons";
import { FormEditChapter } from "./FormEditChapter";

import { toggleFormUpdateChapter } from "../../../../../store/app/actions";

export const ChapterItem = ({ title, image, content, order, booksId, _id, chapters }) => {
    const dispatch = useDispatch();
    const { app } = useSelector((state) => state);
    const showForm = () => {
        dispatch(toggleFormUpdateChapter(_id));
    }
    const onCancel = () => {
        dispatch(toggleFormUpdateChapter());
    }
    return (
        <>
            {
                app.formUpdateChapter === _id ?
                    <FormEditChapter
                        chaptersId={_id}
                        booksId={booksId}
                        title={title}
                        image={image}
                        content={content}
                        order={order}
                        showForm={showForm}
                        chapters={chapters}
                        onCancel={onCancel}
                    /> :
                    (
                        <div id={order} className="chapter__container">
                            <Descriptions
                                title={<ActionButtons
                                    booksId={booksId}
                                    chaptersId={_id}
                                    order={order}
                                    title={title}
                                    toggleForm={showForm}
                                />}>
                                <Descriptions.Item className="chapter__content">
                                    <div>
                                        <img alt="example" className="chapter__img" src={image} />
                                        <p>{content}</p>
                                    </div>
                                </Descriptions.Item>
                            </Descriptions>
                        </div>
                    )
            }
        </>
    )
}


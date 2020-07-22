import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Descriptions, Card } from 'antd';

import { ActionButtons } from "./ActionButtons";
import { FormEditChapter } from "./FormEditChapter";

import { toggleFormUpdateChapter } from "../../../../store/app/actions";

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
                        <div>
                            <a id={order} />
                            <Descriptions
                                title={<ActionButtons
                                    booksId={booksId}
                                    chaptersId={_id}
                                    order={order}
                                    title={title}
                                    toggleForm={showForm}
                                />} />
                            <Card

                                bordered={false}
                                size="small"
                                cover={<img alt="example" src={image} style={{ height: "auto", width: "240px", objectFit: "cover" }} />}
                            />
                            <Descriptions.Item >
                                <div onDoubleClick={() => {
                                    console.log("Два раза клинкул===");
                                }}>
                                    {content}
                                </div>
                            </Descriptions.Item>
                        </div>
                    )
            }
        </>
    )
}


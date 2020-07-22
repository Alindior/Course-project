import React from "react";
import { Modal } from 'antd';

import { Loader } from "../Loader";
import { BookContent } from "./content";

export const ReadingMode = ({ book, onCancel }) => {
    return (
        <>
            <Modal
                style={{ top: 10 }}
                visible={true}
                onCancel={onCancel}
                footer={null}
            >
                {book ? (
                    <>
                        <div className="reading__wrapper">
                            <BookContent book={book} />
                        </div>
                    </>
                ) : <Loader />}
            </Modal>
        </>
    )
}
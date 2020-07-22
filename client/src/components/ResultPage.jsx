import React from 'react';
import { useDispatch } from "react-redux";
import { Result, Button } from 'antd';

import { toggleResult } from "../store/books/actions";

export const ResultPAge = ({ onBack }) => {
    const dispatch = useDispatch();
    const hideModal = () => {
        if (onBack) {
            onBack();
        }
        dispatch(toggleResult())
    };
    return (
        <div className="result__page">
            <Result
                title="Поздравляю , книга успешно создана"
                extra={
                    <Button type="primary" key="console" onClick={hideModal}>
                        Вернуться
                </Button>
                }
            />
        </div>
    )
}
import React from "react";
import { Result, Button } from 'antd';

export const ResultUpdate = ({ toggleModal }) => {
    return (
        <Result
            status="success"
            title="Изменения успешно сохранены"
            extra={[
                <Button type="primary" key="console" onClick={toggleModal}>
                    Вернуться
                </Button>
            ]}
        />
    )
}
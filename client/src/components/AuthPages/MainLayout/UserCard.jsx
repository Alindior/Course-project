import React from "react";
import { Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import classNames from "classnames";

export const UserCard = ({ login, menuOpened, theme }) => {
    return (
        <Card
            className={
                classNames({ "userCard__dark": theme === "dark", "userCard__light": theme === "light" })
            }
        >
            {menuOpened ?
                (
                    <div className="text__wrapper">
                        <UserOutlined />
                        <h3 className="card__user-login">{login}</h3>
                    </div>
                )
                :
                <UserOutlined />}
        </Card>
    )
}
import React from "react";
import { Card, Avatar } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import classNames from "classnames";

const { Meta } = Card;


export const UserCard = ({ user, toggleModal, theme }) => {
    const { login, name, lastname } = user;
    return (
        <Card
            className={
                classNames("home__user", { "home__user-dark": theme === "dark" })
            }
            actions={[
                <EditOutlined key="edit" onClick={toggleModal} />,
            ]}
        >
            <Meta
                avatar={
                    <Avatar size={80} icon={<UserOutlined />} />
                }
                title={login}
                description={`${name || ""} ${lastname || ""}`}
            />
        </Card>
    )
}
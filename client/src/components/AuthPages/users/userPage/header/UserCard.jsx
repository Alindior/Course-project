import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;


export const UserCard = ({ login }) => {
    return (
        <Card className="home__user">
            <Meta
                avatar={
                    <Avatar size={100} icon={<UserOutlined />} />
                }
                title={login}
                description="This is the description"
            />
        </Card>
    )
}
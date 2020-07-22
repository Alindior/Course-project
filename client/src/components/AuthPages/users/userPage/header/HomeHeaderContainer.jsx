import React from 'react';
import { useSelector } from "react-redux";
import { Skeleton } from 'antd';

import { Statistics } from "./Staticstics";
import { UserCard } from "./UserCard";

export const HomeHeaderContainer = ({ login }) => {
    let isLoading = login ? false : true;
    return (
        <div className="home__header">
            <Skeleton loading={isLoading} avatar active >
                <UserCard login={login} />
                <Statistics />
            </Skeleton>
        </div>
    )
}
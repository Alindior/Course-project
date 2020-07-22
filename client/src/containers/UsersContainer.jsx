import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UsersTable } from "../components/AuthPages/users";
import { Loader } from "../components/Loader";
import { getAllUsers } from "../store/users/actions";

export const UsersContainer = () => {
    const dispatch = useDispatch();
    const { users, app } = useSelector((state) => state);
    useEffect(() => {
        document.title = "Пользователи";
        dispatch(getAllUsers());
    }, []);
    return (
        users.usersIsLoading ?
            <Loader />
            :
            <UsersTable users={users.users} theme={app.theme} language={app.language} />
    )
}
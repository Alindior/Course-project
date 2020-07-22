import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from 'antd';

import { logOut } from '../../store/auth/actions';

export const ButtonLogout = ({ auth }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const toLoginPage = () => history.push("/login");
    const logout = () => {
        dispatch(logOut());
    }
    if (auth) {
        return <Button key="1" type="primary" onClick={logout}>Выйти</Button>;
    }
    return <Button key="1" type="primary" onClick={toLoginPage}>Войти</Button>;
}
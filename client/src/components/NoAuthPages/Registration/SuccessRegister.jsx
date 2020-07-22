import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from "antd";
import { InfoCircleTwoTone } from '@ant-design/icons';

import { hideModalSuccessRegistr } from '../../../store/app/actions';

export const SucceessRegister = () => {
    const dispatch = useDispatch();
    const hideModal = () => {
        dispatch(hideModalSuccessRegistr());
    }
    return (
        <div className="auth__success-block">
            <div>
                <InfoCircleTwoTone style={{ fontSize: "40px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
                На вашу почту отправлено письмо с ссылкой на подтвержение регистрации
            </p>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={hideModal}>
                <Link to="/login">На страницу входа</Link>
            </Button>
        </div>
    )
}
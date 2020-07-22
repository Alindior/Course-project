import React from "react";

import { LoginForm } from '../../components/NoAuthPages/Login';

export const Login = () => {
    return (
        <div className="wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдите в свой аккаунт</p>
                    </div>
                    <div className="auth__block">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
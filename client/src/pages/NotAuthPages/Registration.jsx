import React from "react";
import { useSelector } from "react-redux";

import { RegisterForm, SucceessRegister } from '../../components/NoAuthPages/Registration';


export const Registration = () => {
    const { complitadRegistration } = useSelector((state) => state.app)
    return (
        <div className="wrapper">
            <div className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Регистрация</h2>
                        <p>Для входа на сайт, вам нужно зарегистрироваться</p>
                    </div>
                    <div className="auth__block">
                        {complitadRegistration ? <SucceessRegister /> : <RegisterForm />}
                    </div>
                </div>
            </div>
        </div>
    )
}
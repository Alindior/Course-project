import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Switch } from 'antd';

import { changeTheme, changeLanguage } from "../store/app/actions";

const validateMessages = {
    required: 'Это обязательное поле!',
    types: {
        email: "Некорректный типа Email'а",
    },
};

export const FormSettings = ({ auth }) => {
    const dispatch = useDispatch();
    const { theme, language } = useSelector((state) => state.app);
    const toggleTheme = () => {
        dispatch(changeTheme());
    };
    const toggleLanguage = () => {
        dispatch(changeLanguage(language));
    }
    useEffect(() => {
        if (theme !== localStorage) {
            // localStorage.setItem("theme", theme);
        }
    }, [theme]);
    return (
        <Form
            className="settings__form"
            validateMessages={validateMessages}
            style={{ display: !auth && "none" }}
        >
            <Form.Item>
                <Switch
                    className="swicher"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </Form.Item>
            <Form.Item>
                <Switch
                    className="swicher"
                    checked={language === "ru"}
                    onChange={toggleLanguage}
                    checkedChildren="ru"
                    unCheckedChildren="en"
                />
            </Form.Item>
        </Form>
    )
}
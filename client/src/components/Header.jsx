import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageHeader, Button } from 'antd';
import classNames from "classnames"

import { Autocomplite } from "./Autocomplite/Autocomplite";
import { FormSettings } from "./FormSettings";


export const Header = ({ auth }) => {
    const { theme, language } = useSelector((state) => state.app);
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                className={
                    classNames(
                        "header__container",
                        {
                            "header__container-light": theme === "light",
                            "header__container-dark": theme === "dark"
                        })}
                ghost={false}
                title={<Autocomplite />}
                extra={[
                    <FormSettings auth={auth} />,
                    <Button
                        key="1"
                        type="primary"
                        style={{ display: auth && "none" }}
                    >
                        <Link to="/login">
                            Войти
                            </Link>
                    </Button>,
                    <Button
                        key="2"
                        type="primary"
                        style={{ display: auth && "none" }}
                    >
                        <Link to="/register">
                            Зарегистрироваться
                            </Link>
                    </Button>,
                ]}
            >
            </PageHeader>
        </div>
    )
}
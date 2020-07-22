import React from "react";
import { Link } from "react-router-dom";

import { ActionButtons } from "./ActionButtons";

export const columns = (sortedInfo, filteredInfo, tags, language) => {
    return (
        [
            {
                title: language === "ru" ? "Логин" : "Login",
                dataIndex: 'login',
                key: 'login',
                sorter: (a, b) => a.login.length - b.login.length,
                sortOrder: sortedInfo.columnKey === 'login' && sortedInfo.order,
                ellipsis: true,
                render: (login) => <Link to={`/users/${login}`}>{login}</Link>,
            },
            {
                title: language === "ru" ? "Email" : "Email",
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: language === "ru" ? "Статус" : "Status",
                dataIndex: 'admin',
                key: 'admin',
                sorter: (a, b) => a.admin.length - b.admin.length,
                sortOrder: sortedInfo.columnKey === 'admin' && sortedInfo.order,
                ellipsis: true,
                render: (status) => {
                    if (status) {
                        return "Админ"
                    } else {
                        return "Пользователь"
                    }
                }
            },
            {
                title: language === "ru" ? "Доступ" : "Access",
                dataIndex: 'status',
                key: 'status',
                sorter: (a, b) => a.status.length - b.status.length,
                sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
                ellipsis: true,
                render: (status) => {
                    if (status) {
                        return "Активен"
                    } else {
                        return "Заблокирован"
                    }
                }
            },
            {
                title: "",
                dataIndex: "_id",
                key: "actions",
                render: (id) => <ActionButtons id={id} key={id} />
            },]
    )
};
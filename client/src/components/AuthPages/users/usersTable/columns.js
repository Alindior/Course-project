import React from "react";
import { Link } from "react-router-dom";
import { LockOutlined, UnlockOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';

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
                render: (status) => {
                    return status ?
                        (<div className="icon__status">
                            <UserAddOutlined />
                        </div>)
                        :
                        (<div className="icon__status">
                            <UserOutlined />
                        </div>)
                }
            },
            {
                title: language === "ru" ? "Доступ" : "Access",
                dataIndex: 'status',
                key: 'status',
                render: (status) => {
                    return status ?
                        (<div className="icon__status">
                            <UnlockOutlined />
                        </div>)
                        :
                        (<div className="icon__status">
                            <LockOutlined />
                        </div>)
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
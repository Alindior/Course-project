import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreAddOutlined, LogoutOutlined, ReadOutlined, UserOutlined
} from '@ant-design/icons';

import { UserCard } from './UserCard';
import { openSideMenu } from "../../../store/app/actions";
import { logOut } from "../../../store/auth/actions";
const { Sider } = Layout;

export const SideMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { auth, app } = useSelector((state) => state);
    const onLogout = () => {
        dispatch(logOut());
        history.push("/books");
    };
    const onCollapse = () => {
        dispatch(openSideMenu());
    }
    return (
        <Sider collapsible collapsed={!app.menuOpened} onCollapse={onCollapse} theme={app.theme}>
            <div className="user__card">
                <UserCard login={auth.user.login} menuOpened={app.menuOpened} theme={app.theme} />
            </div>
            <Menu theme={app.theme} defaultSelectedKeys={['4']} style={{ height: "85vh" }}>
                <Menu.Item key="4" icon={<ReadOutlined />}>
                    <Link to="/books">
                        {app.language === "ru" ? "Книги" : "Books"}
                    </Link>
                </Menu.Item>
                {auth.user.admin && <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to="/users">
                        {app.language === "ru" ? "Пользователи" : "Users"}
                    </Link>
                </Menu.Item>}
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/home">
                        {app.language === "ru" ? "Моя страница" : "My page"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                    <Link to="/add">
                        {app.language === "ru" ? "Создать книгу" : "Create book"}
                    </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<LogoutOutlined />} onClick={onLogout}>
                    {app.language === "ru" ? "Выход" : "Logout"}
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
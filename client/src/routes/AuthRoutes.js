import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Layout } from 'antd';
import { SideMenu } from "../components/AuthPages/MainLayout";
import { Header } from "../components/Header";
import { AddBook, PageBook, HomePage, BooksPage, UsersPage, UserPage } from "../pages/AuthPages";

const { Content } = Layout;

export const AuthRoutes = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <Layout>
            <SideMenu />
            <Layout className="site-layout">
                <Header auth={isAuthenticated} />
                <Content className="content__wrapper">
                    <Switch>
                        <Route exact path="/add" component={AddBook} />
                        <Route exact path="/edit/:id" component={PageBook} />
                        <Route exact path="/users" component={UsersPage} />
                        <Route exact path={["/users/:login", "/users/:login/:id"]} component={UserPage} />
                        <Route path={["/home/:id", "/home"]} component={HomePage} />
                        <Route path={["/books/:id", "/books"]} component={BooksPage} />
                        <Redirect to="/book" />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}
import React from 'react';
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Registration, Books } from "../pages/NotAuthPages";

export const NotAuthRoutes = () => {
    const { auth } = useSelector((state) => state);
    return (
        <Switch>
            <Route exact path={["/books/:id", "/books"]} component={Books} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            {auth.isAuthenticated ? null : <Redirect to="/books" />}
        </Switch>
    )
}
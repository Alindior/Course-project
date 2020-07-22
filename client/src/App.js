import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { NotAuthRoutes, AuthRoutes } from "./routes";
import { updateAuthStatus } from "./store/auth/actions";
import { AlertApp } from "./components/AlertApp";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { alert } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAuthStatus());
  }, []);
  return (
    <>
      {alert && <AlertApp text={alert.text} type={alert.type} />}
      <Router>
        {isAuthenticated ? <AuthRoutes /> : <NotAuthRoutes />}
      </Router>
    </>
  )
}

export default App;

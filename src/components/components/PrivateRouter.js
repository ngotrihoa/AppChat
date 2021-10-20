import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectIsLogin } from "../../redux/reducer/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

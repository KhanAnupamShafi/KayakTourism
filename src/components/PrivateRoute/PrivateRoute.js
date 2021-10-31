import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  console.log("private route", user);

  if (isLoading) {
    return (
      <div className="spinner-border text-secondary fs-1" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/register",
              hash: "#start",
              state: { from: location },
            }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const Admin = () => {
  if (localStorage.getItem("token")) {
    return <div className="container">Admin</div>;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default Admin;

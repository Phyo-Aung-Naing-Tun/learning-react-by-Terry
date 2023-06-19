import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nest = () => {
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <Link to={"one"}>One</Link>

        <Link to={"two"}>Two</Link>

        <Link to={"three"}>Three</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nest;

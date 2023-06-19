import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Style/Nav.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}> Contact</NavLink>
        <NavLink to={"/admin"}> Admin</NavLink>
        <NavLink to={"/nest"}> Nest</NavLink>
      </ul>
    </div>
  );
};

export default Nav;

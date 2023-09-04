import React from "react";
import { NavLink } from "react-router-dom";

/* define css for .active class in js */
const activeStyle = {
  fontWeight: "bold",
  color: "red",
};

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      /* className={({ isActive }) => (isActive ? "active" : "")} */
      /* use activeStyle in style by condition */
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;

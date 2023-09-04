import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const NavHeader = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {" "}
      <ActiveLink to="/firebase">Firebase</ActiveLink>{" "}
      <Link to="/contact">Contact</Link>{" "}
    </nav>
  );
};

export default NavHeader;

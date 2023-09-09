import React from "react";
import ActiveLink from "../../sharedComponents/ActiveLink";

const LogRegNav = () => {
  return (
    <nav>
      <ActiveLink to="/firebase/emailPassLogin/register">Register</ActiveLink>{" "}
      <ActiveLink to="/firebase/emailPassLogin/login">Login</ActiveLink>{" "}
      <ActiveLink to="/firebase/emailPassLogin/profile">ProtectedProfile</ActiveLink>{" "}
    </nav>
  );
};

export default LogRegNav;

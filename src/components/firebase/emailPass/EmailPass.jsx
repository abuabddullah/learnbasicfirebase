import React from "react";
import LogRegNav from "./LogRegNav";
import { Outlet } from "react-router-dom";

const EmailPass = () => {
  return (
    <div>
      <LogRegNav />
      <Outlet />
    </div>
  );
};

export default EmailPass;

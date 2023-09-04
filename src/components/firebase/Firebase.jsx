import React from "react";
import { Outlet } from "react-router-dom";
import ActiveLink from "../sharedComponents/ActiveLink";
import "./../sharedComponents/style.css";

const Firebase = () => {
  return (
    <div>
      <hr />
      <h3>firebase best practices</h3>
      <hr />

      <div className="drawer bordered">
        <div className="left bordered">
          <ol>
            <li><ActiveLink to="/firebase/googleGitHub">Google-Github Login & SignOut</ActiveLink></li> <hr />
            <li><ActiveLink to="/firebase/emailPassLogin">Email-Password Login & SignOut</ActiveLink></li> <hr />
          </ol>
        </div>
        <div className="right bordered">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Firebase;

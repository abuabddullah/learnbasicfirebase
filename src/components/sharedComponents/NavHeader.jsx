import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { UserContext } from "../firebase/emailPass/UserContextProvider/UserContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

const NavHeader = () => {
  const { user } = useContext(UserContext);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("user logged out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <nav>
      <Link to="/">Home</Link> <ActiveLink to="/firebase">Firebase</ActiveLink>{" "}
      <Link to="/contact">Contact</Link>{" "}
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default NavHeader;

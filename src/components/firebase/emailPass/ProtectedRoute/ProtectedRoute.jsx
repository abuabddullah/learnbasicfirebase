import React, { useContext } from "react";
import { UserContext } from "../UserContextProvider/UserContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useContext(UserContext);
  const location = useLocation();

  if (userLoading) {
    return <div>Showing Loading Component...</div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/firebase/emailPassLogin/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;

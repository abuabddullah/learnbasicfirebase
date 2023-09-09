import React from "react";

const Profile = ({ children }) => {
  return (
    <div>
      <h5>this is Protected Profile Component</h5>
      {children}
    </div>
  );
};

export default Profile;

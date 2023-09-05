import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../../firebase.config";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const GoogleGitHub = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div>
      <h5>Get Login via Google & Github</h5>
      <button onClick={handleGoogleSignIn}>Google Login</button>
      <button onClick={handleGitHubSignIn}>Github Login</button>
      <button onClick={handleSignOut}>Sign Out</button>

      <div>
        <h3>User: {user?.displayName}</h3>
        <h3>Email: {user?.email}</h3>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default GoogleGitHub;

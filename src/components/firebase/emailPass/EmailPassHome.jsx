import React from "react";

const EmailPassHome = () => {
  return (
    <div>
      <br />
      <br />
      welcome to EmailPassHome
      <br />
      <br />
      <h3>topics to cover</h3>
      <ol>
        <li>
          <small>createUserWithEmailAndPassword(auth, email, password)</small>
        </li>
        <li>
          <small>signInWithEmailAndPassword(auth, email, password)</small>
        </li>
        <li>
          <small>signOut(auth)</small>
        </li>
        <li>
          <small>sendEmailVerification(auth.currentUser)</small>
        </li>
        <li>
          <small>sendPasswordResetEmail(auth, email)</small>
        </li>
      </ol>
    </div>
  );
};

export default EmailPassHome;

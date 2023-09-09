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
      <ol className="textAlignLeft">
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
        <li>
          <small>PrivateRoute or ProtectedRoute</small>
          <strong>(important elemets)</strong> 
          <ul>
            <li>user</li>
            <li>signing,signouting,onAuthStateChanging functions</li>
            <li>loading</li>
          </ul>
        </li>
        <li>redirecting after login</li>
      </ol>
    </div>
  );
};

export default EmailPassHome;

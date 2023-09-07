import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { auth } from "../../../../../firebase.config";

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    /* must1 : prevent Default loading */
    e.preventDefault();
    /* must2 : nullify error and success messages */
    setError("");
    setSuccess("");

    /* must3 : get form data */
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    /* must4 : set loading to true */
    setLoading(true);

    /* must5 : create user with email and password */
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setSuccess("user created successfully");
        setLoading(false);
        form.reset();
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
        // ..
      });

    /* must6 : set loading to false */
    setLoading(false);
  };

  const handleVerifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  const handleForgotPass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
        // ..
      });
  };

  return (
    <div>
      <br />
      Please Login
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="user email"
          name="email"
          required
          onBlur={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="user password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Login" />
        <br />
        <small>
          new to this site?
          <Link to="/firebase/emailPassLogin/register">Register</Link>
        </small>
      </form>
      <small>
        forgot password?<i>(no need login)</i>{" "}
        <button onClick={() => handleForgotPass(userEmail)}>
          <small>click here</small>
        </button>
      </small>
      <br />
      <small>
        verify email?<i>(must login)</i>{" "}
        <button onClick={handleVerifyEmail}>
          <small>click here</small>
        </button>
      </small>
      <br />
      {/* must7 : show error messages  */}
      {error && <small style={{ color: "red" }}>{error}</small>}
      {/* must8 : show success messages */}
      {success && <small style={{ color: "green" }}>{success}</small>}
      <br />
    </div>
  );
};

export default Login;

import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../../firebase.config";
import { UserContext } from "../UserContextProvider/UserContextProvider";

const Login = () => {
  const { user, setUserLoading } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setUserLoading(true);

    /* must5 : create user with email and password */
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSuccess("user created successfully");
        form.reset();
        navigate(from, { replace: true })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
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
        forgot password?<i>(no need login but need email in input)</i>{" "}
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

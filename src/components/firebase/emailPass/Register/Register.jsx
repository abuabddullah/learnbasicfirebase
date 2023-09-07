import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../../../firebase.config";

const Register = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

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
    createUserWithEmailAndPassword(auth, email, password)
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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setSuccess("user logged out successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          <br />
          Please Register
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="user name" name="name" required />
            <br />
            <input
              type="email"
              placeholder="user email"
              name="email"
              required
            />
            <br />
            <input
              type="password"
              placeholder="user password"
              name="password"
              required
            />
            <br />
            <input type="submit" value="Register" />
            <br />
            <small>
              already have an account?
              <Link to="/firebase/emailPassLogin/login">Login</Link>
            </small>
          </form>
          <br />
          {/* must7 : show error messages  */}
          {error && <small style={{ color: "red" }}>{error}</small>}
          {/* must8 : show success messages */}
          {success && <small style={{ color: "green" }}>{success}</small>}
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};

export default Register;

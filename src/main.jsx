import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AppIndex from "./components/AppIndex.jsx";
import Contact from "./components/contact/Contact.jsx";
import EmailPass from "./components/firebase/emailPass/EmailPass.jsx";
import Firebase from "./components/firebase/Firebase.jsx";
import GoogleGitHub from "./components/firebase/googleGitHub/GoogleGitHub.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import FirebaseIndex from "./components/firebase/FirebaseIndex.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AppIndex />,
      },
      {
        path: "/firebase",
        element: <Firebase />,
        children: [
          {
            path: "/firebase",
            element: <FirebaseIndex />,
          },
          {
            path: "/firebase/googleGitHub",
            element: <GoogleGitHub />,
          },
          {
            path: "/firebase/emailPassLogin",
            element: <EmailPass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

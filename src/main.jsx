import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AppIndex from "./components/AppIndex.jsx";
import Contact from "./components/contact/Contact.jsx";
import EmailPass from "./components/firebase/emailPass/EmailPass.jsx";
import Register from "./components/firebase/emailPass/Register/Register.jsx";
import Firebase from "./components/firebase/Firebase.jsx";
import FirebaseIndex from "./components/firebase/FirebaseIndex.jsx";
import GoogleGitHub from "./components/firebase/googleGitHub/GoogleGitHub.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";
import Login from "./components/firebase/emailPass/Register/Login.jsx";
import Profile from "./components/firebase/emailPass/Profile/Profile.jsx";
import EmailPassHome from "./components/firebase/emailPass/EmailPassHome.jsx";
import UserContextProvider from "./components/firebase/emailPass/UserContextProvider/UserContextProvider.jsx";
import ProtectedRoute from "./components/firebase/emailPass/ProtectedRoute/ProtectedRoute.jsx";
import RTKPosts from "./components/RTKnQuery/RTKPosts/RTKPosts.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import PostDetails from "./components/RTKnQuery/RTKPosts/PostDetails/PostDetails.jsx";

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
            children: [
              {
                path: "/firebase/emailPassLogin",
                element: <EmailPassHome />,
              },
              {
                path: "/firebase/emailPassLogin/register",
                element: <Register />,
              },
              {
                path: "/firebase/emailPassLogin/login",
                element: <Login />,
              },
              {
                path: "/firebase/emailPassLogin/profile",
                element: (
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "/rtkPosts",
        element: <RTKPosts />,
      },
      {
        path: "/rtkPosts/:id",
        element: <PostDetails />,
        /* loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`), */
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>Not Found 404!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserContextProvider>
  </React.StrictMode>
);

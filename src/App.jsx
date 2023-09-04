import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavHeader from "./components/sharedComponents/NavHeader";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Firebase + React + Router</h1>
      <small>Firebase for Google & Github</small>
      <br />
      <br />
      <br />
      <NavHeader />
      <Outlet />
    </>
  );
}

export default App;

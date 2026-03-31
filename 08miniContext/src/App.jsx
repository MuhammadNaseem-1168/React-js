import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className=" text-3xl text-white text-center mt-56 ">
        Hi!, Naseem Ansarii
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

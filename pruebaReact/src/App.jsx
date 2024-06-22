import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./components/UserList";


function App() {



    return (
      <div className=".full-w h-100% flex justify-center items-center">
        <UserList/>
      </div>
    );
  };


export default App;

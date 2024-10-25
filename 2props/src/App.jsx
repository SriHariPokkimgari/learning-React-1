import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";
import profilepic from "./assets/panda.jpg";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Card userName="hari" study="Diploma" img={profilepic} />
      <Card userName="Rao" study="Diploma" img={profilepic} />
      <Card userName="Prasad" study="Diploma" img={profilepic} />
    </>
  );
}

export default App;

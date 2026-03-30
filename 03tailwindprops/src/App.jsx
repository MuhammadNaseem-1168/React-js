import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./index.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Naseem",
    age: 20,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 relative">
        <h1 className="bg-green-600 text-black p-2 rounded-xl  flex justify-center items-center   ">
          Tailwind Test
        </h1>
        <h1 className="text-red-500 text-3xl">Hello</h1>
        <Card username="chai aur code" btnText = "click me" someObj={myObj}></Card>
        <Card username="Naseem Ansarii" btnText = "visit me"></Card>
      </div>
    </>
  );
}

export default App;

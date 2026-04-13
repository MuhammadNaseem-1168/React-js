import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center font-extrabold text-4xl my-12">
        Welcome to ReduxToolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;

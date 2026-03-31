import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className=" flex flex-col  gap-4">
      <h2 className="text-red-800 font-bold text-3xl mt-2 ">Login</h2>
      <input className="pl-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input className="pl-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button className="bg-blue-800 text-2xl text-white p-1" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

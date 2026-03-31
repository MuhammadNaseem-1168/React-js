import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-xl gap-4 text-white font-bold">Please Login</div>;
  return <div className="text-3xl gap-4 text-yellow-600 font-bold">Welcome {user.username}</div>;
}

export default Profile;

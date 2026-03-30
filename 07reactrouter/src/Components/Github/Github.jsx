import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4 m-24 ">
      Github followers: {data.followers}
      <img
        width={200}
        src="https://images.pexels.com/photos/34774345/pexels-photo-34774345.jpeg"
        alt="Github picture"
      />
    </div>
  );
}

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}

export default Github;

import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await fetch("https://api.github.com/users/mahakgupta0123");
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    asyncFunc()
  }, []);
  return (
    <div className="bg-gray-600 text-white font-bold p-4 text-center text-xl">
      Github followers: {data.followers}
    </div>
  );
};

export default Github;

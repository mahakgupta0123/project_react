import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="bg-gray-600 text-white font-bold p-4 text-center text-xl">
      User: {id}
    </div>
  );
};

export default User;

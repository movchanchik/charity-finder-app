import React from "react";
import FavoriteList from "../components/FavoriteList";

const Faforites = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl pt-10 pl-6 tracking-wide font-semibold text-gray-800">
        Faforites
      </h1>
      <FavoriteList />
    </div>
  );
};

export default Faforites;

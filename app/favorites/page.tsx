import React from "react";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl pt-10 pl-6 tracking-wide font-semibold text-gray-800">
        Favorites
      </h1>
      <FavoritesList />
    </div>
  );
};

export default Favorites;

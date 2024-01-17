"use client";
import React from "react";
import CharityItem from "./CharityItem";
import { LocalStorageItem } from "../types/inrefaces";

const FavoriteList = () => {
  const localStorageItems = JSON.parse(
    localStorage.getItem("favoriteList") || "[]"
  );
  return (
    <>
      {!localStorageItems.length ? (
        <div className="text-xl font-semibold text-gray-400 flex flex-row justify-center p-4 my-4">
          No Favorites Yet
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {localStorageItems?.map((localStorageItem: LocalStorageItem) => (
            <CharityItem key={localStorageItem.ein} item={localStorageItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default FavoriteList;

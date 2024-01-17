"use client";
import React, { useState } from "react";
import { LocalStorageItem } from "../types/inrefaces";

const AddToLocalStorage = ({ item }: { item: LocalStorageItem }) => {
  const localStorageItems = JSON.parse(
    localStorage.getItem("favoriteList") || "[]"
  );

  const [isStorageContainsValue, setStorageValue] = useState(
    localStorageItems?.find(
      (favoriteItem: LocalStorageItem) => favoriteItem.ein === item.ein
    )
  );

  const handleAddToStorage = () => {
    if (!localStorageItems.length) {
      localStorage.setItem("favoriteList", JSON.stringify([item]));
    } else {
      localStorage.setItem(
        "favoriteList",
        JSON.stringify([...localStorageItems, item])
      );
    }
    setStorageValue(true);
  };

  const handleRemoveFromStorage = () => {
    const res = localStorageItems?.filter(
      (favoriteItem: LocalStorageItem) => favoriteItem.ein !== item.ein
    );
    localStorage.setItem("favoriteList", JSON.stringify(res));
    setStorageValue(false);
  };

  return (
    <div>
      {!isStorageContainsValue ? (
        <button
          className="w-full bg-[#F14040] rounded-sm py-4 text-white font-bold hover:bg-[#D31616] duration-300"
          onClick={handleAddToStorage}
        >
          Add To Local Storage
        </button>
      ) : (
        <button
          className="w-full bg-[#2D59AF] rounded-sm py-4 text-white font-bold hover:bg-[#0F3D97] duration-300"
          onClick={handleRemoveFromStorage}
        >
          Remove from Local Storage
        </button>
      )}
    </div>
  );
};

export default AddToLocalStorage;

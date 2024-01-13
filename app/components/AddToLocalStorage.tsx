"use client";
import React from "react";

const AddToLocalStorage = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("I made this");
        }}
      >
        Add To Local Storage
      </button>
    </div>
  );
};

export default AddToLocalStorage;

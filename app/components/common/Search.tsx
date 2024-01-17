"use client";
import { FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="relative">
        <input
          className="px-4 py-3 border border-gray-300 rounded-md w-full
                                lg:w-[28rem]
                                hover:outline outline-1 
                                outline-[#32C8BB] focus:outline outline-offset-0"
          type="text"
          name="name"
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3.5"
          type="submit"
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;

import React from "react";
import { Charity } from "../types/inrefaces";
import CharityItem from "./CharityItem";
import causesJSON from "../causes.json";

const CharityItems = async () => {
  const causes = causesJSON.causes;
  const randomIndex = Math.floor(Math.random() * causes.length);

  const response = await fetch(
    `https://partners.every.org/v0.2/search/${causes[randomIndex]}?take=12&apiKey=pk_live_836269766a06ccc2bf45d3b26574134f`
  );
  const res = await response.json();

  return (
    <div className="container mx-auto">
      <h1 className="pt-8 text-3xl mt-2 font-semibold flex justify-center text-gray-700">
        You May Interest
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {res.nonprofits.map((item: Charity) => {
          return <CharityItem key={item.ein} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default CharityItems;

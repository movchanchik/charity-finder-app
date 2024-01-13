import Link from "next/link";
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import Search from "./Search";

const Header = () => {
  return (
    <nav className="bg-[#515151] py-4 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white flex flex-row items-center justify-start gap-2 hover:text-[#e2e2e2]"
        >
          <GiPayMoney size={34} />
          <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
            Charity Finder
          </span>
        </Link>
        <Search />
        <Link href="/favorites" title="Favorites">
          <div className="bg-white p-3 rounded-full hover:bg-[#e2e2e2] cursor-pointer">
            <MdFavorite color="#e86565" size={28} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

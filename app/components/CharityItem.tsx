import React from "react";
import { Charity, LocalStorageItem } from "../types/inrefaces";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const CharityItem = ({ item }: { item: Charity | LocalStorageItem }) => {
  return (
    <Link
      href={`/charity/${item.ein}`}
      className="mt-5 px-5 py-5 w-full rounded-md bg-white shadow-lg hover:bg-[#FBFBFB] text-gray-700"
    >
      <div className="flex flex-row justify-start items-center  gap-x-2">
        <div className="">
          <Image src={item.logoUrl} alt={item.name} width={48} height={48} />
        </div>
        <div className="text-lg font-semibold">{item.name}</div>
      </div>
      <div className="w-full my-3 border-b border-gray-300"></div>
      <div className="flex gap-x-2">
        <FaLocationDot className="mt-1" />
        <span>{item.location}</span>
      </div>
    </Link>
  );
};

export default CharityItem;

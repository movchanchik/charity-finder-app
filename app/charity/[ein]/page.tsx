import { CharityItemType, Tag } from "@/app/types/inrefaces";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import AddToLocalStorage from "@/app/components/AddToLocalStorage";

const CharityPage = async ({
  params,
}: {
  params: {
    ein: string;
  };
}) => {
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/${params.ein}`
  );
  const res = await response.json();
  const item: CharityItemType = res.data;
  return (
    <div className="container mx-auto flex flex-row gap-x-8 my-4 p-2">
      <div className="w-3/5">
        <Image
          className="rounded-t-lg"
          src={item.nonprofit.coverImageUrl}
          alt="Cover image"
          width={900}
          height={400}
          layout="responsive"
        />
        <div className="flex flex-row gap-x-4 py-2 my-2">
          <Image
            className="mr-3 mb-3 rounded-full md:mb-0"
            src={item.nonprofit.logoUrl}
            alt=""
            width={48}
            height={48}
          />
          <h1 className="flex flex-wrap justify-center items-center text-3xl tracking-wide font-semibold text-gray-800 md:justify-normal">
            {item.nonprofit.name}
          </h1>
        </div>
        <div className="flex flex-row gap-x-4 items-start">
          <FaLocationDot className="mt-1" />
          <span>{item.nonprofit.locationAddress}</span>
        </div>
        <div className="my-4">
          {item.nonprofit.descriptionLong
            ? item.nonprofit.descriptionLong
            : item.nonprofit.description}
        </div>
      </div>
      <div className="w-2/5 p-6 h-fit rounded-md shadow-md flex flex-col gap-y-4">
        <AddToLocalStorage
          item={{
            description: item.nonprofit.descriptionLong
              ? item.nonprofit.descriptionLong
              : item.nonprofit.description
              ? item.nonprofit.description
              : "",
            ein: item.nonprofit.ein,
            name: item.nonprofit.name,
            profileUrl: item.nonprofit.profileUrl,
            logoUrl: item.nonprofit.logoUrl,
            coverImageUrl: item.nonprofit.coverImageUrl,
            location: item.nonprofit.locationAddress,
            websiteUrl: item.nonprofit.websiteUrl,
            tags: [],
          }}
        />
        <Link
          href={item.nonprofit.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center bg-emerald-800 rounded-sm py-4 text-white font-bold hover:bg-emerald-950 duration-300"
        >
          Check in in Every.org
        </Link>
        <div>
          <h4 className="font-semibold text-lg">Tags:</h4>
          <div className="flex flex-wrap mt-1">
            {item.nonprofitTags.map((tag: Tag) => {
              return (
                <Link
                  key={tag.id}
                  href={tag.tagUrl}
                  target="_blank"
                  className="bg-slate-500 text-white px-3 py-2 m-2 rounded-3xl shadow-md hover:bg-slate-600 duration-300"
                >
                  {tag.tagName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityPage;

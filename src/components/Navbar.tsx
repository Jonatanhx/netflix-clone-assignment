"use client";
import { HomeIcon } from "@heroicons/react/16/solid";
import { BookmarkPlusIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <header className="bg-[#0A0A0A] flex items-center">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red-700 font-bold pl-4 pt-6 pb-6">
          Netflix
        </h1>
      </Link>

      <div className="flex flex-1 justify-end pr-8 p-4">
        <Link href="/">
          <HomeIcon className="size-11 mt-2 text-white"></HomeIcon>
        </Link>

        <Link href="/bookmarks">
          <BookmarkPlusIcon className="size-11 mt-2 text-white flex"></BookmarkPlusIcon>
        </Link>

        <SearchBar></SearchBar>
      </div>
    </header>
  );
}

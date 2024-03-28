"use client";
import { HomeIcon } from "@heroicons/react/16/solid";
import { BookmarkPlusIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <header className="bg-[#0A0A0A] flex">
      <Link href="/">
        <h1 className="text-3xl text-red-700 font-bold m-8">Netflix</h1>
      </Link>

      <div className="flex flex-1 justify-end pr-8 mt-8 mb-8">
        <Link href="/">
          <HomeIcon className="size-11 text-white"></HomeIcon>
        </Link>

        <Link href="/bookmarks">
          <BookmarkPlusIcon className="size-11 text-white flex"></BookmarkPlusIcon>
        </Link>

        <SearchBar></SearchBar>
      </div>
    </header>
  );
}

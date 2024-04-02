"use client";
import { Switch } from "@/components/ui/switch";
import { HomeIcon } from "@heroicons/react/16/solid";
import { BookmarkPlusIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="bg-[#0A0A0A] flex items-center p-4">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red-700 font-bold pl-4">
          Netflix
        </h1>
      </Link>
      <div className="flex flex-1 justify-between">
        <div className="flex ml-8 items-end">
          <p className="text-white mr-5">Enable parental filter: </p>
          <Switch></Switch>
        </div>
        <div className="flex flex-row">
          <Link href="/">
            <HomeIcon className="size-11 text-white"></HomeIcon>
          </Link>

          <Link href="/bookmarks">
            <BookmarkPlusIcon className="size-11 text-white flex"></BookmarkPlusIcon>
          </Link>

          <SearchBar></SearchBar>
        </div>
      </div>
    </header>
  );
}

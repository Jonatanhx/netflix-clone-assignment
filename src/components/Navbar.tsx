"use client";
import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { HomeIcon } from "@heroicons/react/16/solid";
import { BookmarkPlusIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`flex items-center p-4 border-b-2 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Link href="/">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold pl-4 ${
            isDarkMode ? "text-red-700" : "text-red-700"
          }`}
        >
          Netflix
        </h1>
      </Link>
      <div className="flex flex-1 justify-between">
        <div className="flex flex-1 justify-end items-center">
          <p className={`mr-2 ${isDarkMode ? "text-white" : "text-black"}`}>
            Toggle dark mode
          </p>
          <Switch
            data-state={isDarkMode ? "checked" : "unchecked"}
            onCheckedChange={toggleDarkMode}
          />
        </div>
        <div className="flex flex-row justify-end">
          <Link href="/">
            <HomeIcon
              className={`size-11 ${isDarkMode ? "text-white" : "text-black"}`}
            ></HomeIcon>
          </Link>

          <Link href="/bookmarks">
            <BookmarkPlusIcon
              className={`size-11 ${isDarkMode ? "text-white" : "text-black"}`}
            ></BookmarkPlusIcon>
          </Link>

          <SearchBar></SearchBar>
        </div>
      </div>
    </header>
  );
}

import { Switch } from "@/components/ui/switch";
import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-neutral-900 flex">
      <h1 className="text-3xl text-red-700 font-bold p-8">Netflix</h1>
      <div className="flex flex-row">
        <h1 className="text-white text-2xl mt-9 mr-4">Beta: </h1>
        <div className="mt-11">
          <Switch></Switch>
        </div>
      </div>
      <div className="flex flex-1 justify-end pr-8 mt-8 mb-8">
        <Link href="/">
          <HomeIcon className="size-11 text-white"></HomeIcon>
        </Link>

        <Link href="/bookmarks">
          <BookmarkIcon className="size-11 text-white flex"></BookmarkIcon>
        </Link>
        <MagnifyingGlassIcon className="size-11 text-white flex"></MagnifyingGlassIcon>
      </div>
    </header>
  );
}

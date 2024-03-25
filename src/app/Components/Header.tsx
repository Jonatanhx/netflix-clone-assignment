import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <header className="bg-neutral-900 flex">
      <h1 className="text-3xl text-red-700 font-bold p-8">Netflix</h1>
      <div className="flex flex-1 justify-end pr-48">
        <HomeIcon className="size-11 mt-8 mb-8 text-white"></HomeIcon>
        <MagnifyingGlassIcon className="size-11 mt-8 mb-8 text-white flex"></MagnifyingGlassIcon>
      </div>
    </header>
  );
}

// SearchBar.tsx
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInput(false);
    router.push(`/search/${searchTerm}`);
  };

  const handleSearchClick = () => {
    setShowInput(true);
  };

  return (
    <div className="flex items-center">
      {showInput ? (
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-gray-800 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out"
            placeholder="Search movies..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <div className="cursor-pointer" onClick={handleSearchClick}>
          <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
}

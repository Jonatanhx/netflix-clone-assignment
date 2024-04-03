import { useDarkMode } from "@/contexts/DarkModeContext";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const term = searchParams.get("searchTerm") || "";
    setSearchTerm(term);
  }, [searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInput(false);
    router.push(`/search/${encodeURIComponent(searchTerm)}`);
  };

  const handleSearchClick = () => {
    setShowInput(true);
  };

  return (
    <div className="flex items-center">
      {showInput ? (
        <form onSubmit={handleSubmit} className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-white text-black px-4 py-2 rounded-md transition-all duration-300 ease-in-out w-full"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
          >
            <MagnifyingGlassIcon className="size-9 text-black" />
          </button>
        </form>
      ) : (
        <div className="cursor-pointer" onClick={handleSearchClick}>
          <MagnifyingGlassIcon
            className={`size-11 ${isDarkMode ? "text-white" : "text-black"}`}
          />
        </div>
      )}
    </div>
  );
}

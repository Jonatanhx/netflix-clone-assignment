import { BookmarkIcon } from "@heroicons/react/16/solid";

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onClick: () => void;
}

export default function BookmarkButton({
  isBookmarked,
  onClick,
}: BookmarkButtonProps) {
  return (
    <div
      className="absolute top-2 right-2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <BookmarkIcon
        className={`size-16 ${isBookmarked ? "text-red-700" : "text-gray-400"}`}
      ></BookmarkIcon>
    </div>
  );
}

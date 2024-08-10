import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchPlace = () => {
  const [showResult, setShowResult] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowResult(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative z-20">
      <div className="w-[300px]">
        <div
          className={`w-full flex items-center gap-x-2 bg-gray-300 px-2 lg:px-6 ${
            showResult ? "rounded-t-full" : "rounded-full"
          }`}
        >
          <FiSearch className="text-xl shrink-0" />
          <input
            type="search"
            placeholder="Search Locations"
            onFocus={() => setShowResult(true)}
            className="border-none outline-none bg-transparent p-2 w-full"
          />
        </div>
      </div>
      {showResult && (
        <div
          ref={divRef}
          className="w-[300px] overflow-y-auto h-[300px] bg-gray-300 rounded-b-lg"
        ></div>
      )}
    </div>
  );
};

export default SearchPlace;

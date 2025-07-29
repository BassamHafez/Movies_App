"use client";
import { Search } from "@/shared/icons";
import { useState } from "react";

const MainSearchInput = ({
  kbd,
  placeholder,
  classes,
  name = "searchInput",
  handleSearch,
  searchTerm = "",
  withBtn,
}) => {
  const [searchVal, setSearchVal] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchVal.trim()) return;
    handleSearch(searchVal);
  };

  return (
    <>
      {withBtn ? (
        <form
          className="join border border-gray-800 rounded-sm"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input join-item grow xs:min-w-[300px] rounded-l-sm border-0"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder={placeholder}
          />
          <button type="submit" className="btn rounded-r-sm join-item">
            <Search className="opacity-50 size-5" />
          </button>
        </form>
      ) : (
        <label className="input border border-gray-800 rounded-sm">
          <Search className="opacity-50" />
          <input
            type="search"
            className={`grow ${classes}`}
            placeholder={placeholder}
            name={name}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <kbd className="kbd kbd-sm">Ctrl</kbd>
          <kbd className="kbd kbd-sm">{kbd}</kbd>
        </label>
      )}
    </>
  );
};

export default MainSearchInput;

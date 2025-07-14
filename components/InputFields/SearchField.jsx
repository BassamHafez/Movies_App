import { Search } from "@/shared/icons";

const SearchField = () => {
  return (
    <label className="input border border-gray-800 rounded-sm">
      <Search className="opacity-50" />
      <input type="search" className="grow" placeholder="Search" />
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  );
};

export default SearchField;

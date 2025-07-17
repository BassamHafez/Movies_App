"use client";
import { MainModal } from "@/shared/components";
import { Search } from "@/shared/icons";
import { useState } from "@/shared/hooks";

const SearchField = ({ smallField }) => {
  const [showModal, setShowModal] = useState(false);
  const searchField = (
    <label className="input border border-gray-800 rounded-sm">
      <Search className="opacity-50" />
      <input type="search" className="grow" placeholder="Search" />
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  );
  return (
    <>
      {!smallField ? (
        searchField
      ) : (
        <>
          <div className="tooltip tooltip-bottom" data-tip="search pages">
            <button className="cursor-pointer" onClick={() => setShowModal(true)}>
              <Search className="hover:scale-105 hover:text-main duration-500" />
            </button>
          </div>
          <MainModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={() => {
              setShowModal(false);
            }}
            confirmTxt="Search"
          >
            <h2 className="font-bold mb-4 text-2xl">Search Pages</h2>
            {searchField}
          </MainModal>
        </>
      )}
    </>
  );
};

export default SearchField;

"use client";
import { MainModal, MainSearchInput } from "@/shared/components";
import { Search } from "@/shared/icons";
import { useState } from "@/shared/hooks";

const SearchField = ({ smallField }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!smallField ? (
        <MainSearchInput placeholder="Search" kbd="K" name="searchPages" />
      ) : (
        <>
          <div className="tooltip tooltip-bottom" data-tip="search pages">
            <button
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            >
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
            <MainSearchInput placeholder="Search" kbd="K" name="searchPages" />
          </MainModal>
        </>
      )}
    </>
  );
};

export default SearchField;

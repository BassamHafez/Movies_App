"use client";
import { MainModal, MainSearchInput } from "@/shared/components";
import { Search } from "@/shared/icons";
import {
  useState,
  useEffect,
  useSelector,
  useRef,
  useMemo,
  useCallback,
} from "@/shared/hooks";
import { privatePages, publicPages } from "@/logic/static";
import SuggestionMenu from "./SuggestionMenu";

const SearchField = ({ smallField }) => {
  const token = useSelector((s) => s.userInfo.token);
  const [showModal, setShowModal] = useState(false);
  const [term, setTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  const pages = token ? privatePages : publicPages;

  const filtered = useMemo(() => {
    return term
      ? pages.filter((p) =>
          p.name.toLowerCase().includes(term.toLowerCase())
        )
      : [];
  }, [term, pages]);

  const getHref = useCallback(
    (item) => (token ? item.path : `/#${item.path}`),
    [token]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleKeyNavigation = (event) => {
    if (!showDropdown || filtered.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : 0
      );
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filtered.length - 1
      );
    }
    if (event.key === "Enter") {
      if (activeIndex >= 0 && filtered[activeIndex]) {
        window.location.href = getHref(filtered[activeIndex]);
      }
    }
    if (event.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const handleSearchTyping = (value) => {
    setTerm(value);
    setShowDropdown(!!value.trim());
    setActiveIndex(-1);
  };

  const handleItemClick = () => {
    setTerm("");
    setShowDropdown(false);
    setActiveIndex(-1);
    if (smallField) setShowModal(false);
  };

  const SearchInputBlock = (
    <div
      className="relative"
      ref={containerRef}
      onKeyDown={handleKeyNavigation}
    >
      <MainSearchInput
        placeholder="Search"
        kbd="K"
        ref={inputRef}
        handleSearch={handleSearchTyping}
        searchTerm={term}
      />

      <SuggestionMenu
        showDropdown={showDropdown}
        filtered={filtered}
        getHref={getHref}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
        menuRef={menuRef}
      />
    </div>
  );

  return (
    <>
      {!smallField ? (
        SearchInputBlock
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
            onClose={() => {
              setShowModal(false);
              setTerm("");
              setActiveIndex(-1);
            }}
            noActions
          >
            <h2 className="font-bold mb-4 text-2xl">Search Pages</h2>

            <div className="relative min-h-[25vh]">{SearchInputBlock}</div>
          </MainModal>
        </>
      )}
    </>
  );
};

export default SearchField;

import { Link, AnimatePresence, motion } from "@/shared/lib";

const SuggestionMenu = ({
  showDropdown,
  filtered,
  getHref,
  activeIndex,
  onItemClick,
  menuRef,
}) => {
  return (
    <AnimatePresence>
      {showDropdown && (
        <motion.ul
          ref={menuRef}
          key="menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute left-0 right-0 mt-2 bg-base-200 shadow-lg rounded-md border border-neutral p-2 z-50 max-h-40 overflow-x-hidden overflow-y-auto"
          role="listbox"
        >
          {filtered.map((item, index) => (
            <Link
              key={item.name}
              href={getHref(item)}
              onClick={() => onItemClick(item)}
            >
              <motion.li
                layout
                role="option"
                aria-selected={activeIndex === index}
                className={`p-2 rounded transition 
                ${activeIndex === index ? "bg-base-300" : "hover:bg-base-300"}`}
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SuggestionMenu;

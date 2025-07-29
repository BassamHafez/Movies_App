import { MainModal, MainSearchInput } from "@/shared/components";
import { Filter, BrushCleaning } from "@/shared/icons";
import FiltersSection from "./FiltersSection";
import { useDispatch, useState } from "@/shared/hooks";
import { filterSidebarActions } from "@/store/filterSidebar-slice";

const FilerHeader = ({ classes, handleSearch, clearSearch, searchTerm }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleReset = () => {
    clearSearch();
    dispatch(filterSidebarActions.resetFilters());
  };

  return (
    <>
      <header
        className={`flex flex-wrap items-center justify-between gap-2 ${classes}`}
      >
        <MainSearchInput
          placeholder="search"
          kbd="H"
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          withBtn
        />

        <div className="flex flex-wrap gap-2 items-center ms-auto">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-secondary rounded-xs"
          >
            <Filter className="size-4" /> Filter
          </button>
          <button
            className="btn btn-error text-white rounded-xs"
            onClick={handleReset}
          >
            <BrushCleaning className="size-4" /> Reset Filters
          </button>
        </div>
      </header>

      <MainModal isOpen={showModal} onClose={closeModal} noActions>
        <FiltersSection onClose={closeModal} />
      </MainModal>
    </>
  );
};

export default FilerHeader;

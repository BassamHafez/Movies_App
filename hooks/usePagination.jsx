import { useState } from "@/shared/hooks";

const usePagination = ({
  data,
  searchTerm,
  itemsPerPage,
  isFiltered,
  customFilterFn,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = isFiltered
    ? data.filter((item) => {
        if (typeof customFilterFn === "function") {
          return customFilterFn(item, searchTerm);
        }
        return Object.values(item).some((val) =>
          String(val ?? "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      })
    : data;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentData,
  };
};

export default usePagination;

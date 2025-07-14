const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-6 col-span-4">
      <div className="join">
        <button
          className="join-item btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          «
        </button>

        {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`join-item btn ${
                currentPage === pageNum ? "btn-active bg-main/50" : ""
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="join-item btn"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;

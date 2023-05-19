import React, { useState } from "react";

const Pagination = ({ data, pageSize, currentPage, setCurrentPage, themeColor }) => {
  const totalPages = Math.ceil(data.count / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="bg-white rounded-md px-4 shadow-xl shadow-slate-400" >
      <button className="hidden text-green-500 text-yellow-500">hiddend</button>
      <div>
        {isFirstPage ? null : (
          <>
            <button
              key="first"
              onClick={() => handlePageClick(1)}
              className="inline-block py-1 px-2 rounded-md text-blue-600 mr-2 "
            >
              1
            </button>
            {currentPage > 2 && <span className="inline-block py-1 px-2 rounded-md text-blue-600 mr-2 ">...</span>}
          </>
        )}

        {prevPage > 1 && (
          <button
            key={prevPage}
            onClick={() => handlePageClick(prevPage)}
            className="inline-block py-1 px-2 rounded-md 
             text-blue-600 mr-2 "
          >
            Prev
          </button>
        )}

        <button
          key={currentPage}
          onClick={() => handlePageClick(currentPage)}
          className={`inline-block py-1 px-2 rounded-md mr-2 text-${themeColor}`}
          style={{color: themeColor,}}
        >
          {currentPage}
        </button>

        {nextPage < totalPages && (
          <button
            key={nextPage}
            onClick={() => handlePageClick(nextPage)}
            className="inline-block py-1 px-2 rounded-md text-blue-600 mr-2 "
          >
            Next
          </button>
        )}

        {isLastPage ? null : (
          <>
            {currentPage < totalPages - 1 && <span className="inline-block py-1 px-2 rounded-md text-blue-600 mr-2 ">...</span>}
            <button
              key={totalPages}
              onClick={() => handlePageClick(totalPages)}
              className="inline-block py-1 px-2 rounded-md text-blue-600 mr-2 "
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;

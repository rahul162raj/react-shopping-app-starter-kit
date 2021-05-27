import React from "react";

const PaginationComponent = (props) => {
  let totalPageCount = Math.ceil(props.Items.length / props.pageSize);
  let totalPages = [...Array(totalPageCount).keys()].map((page) => page + 1);
  return (
    <nav>
      <ul className="pagination mt-4 mb-5">
        {totalPages.map((page) => (
          <li
            onClick={() => props.onPageChange(page)}
            key={page}
            className={
              page === props.currentIndex ? "page-item active" : "page-item"
            }
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationComponent;

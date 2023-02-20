import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

type PaginationProps = {
  value: number;
  onChangePage: any;
};
const Pagination: React.FC<PaginationProps> = ({ value, onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        forcePage={value - 1}
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        // renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;

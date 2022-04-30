import * as React from 'react';
import styles from './PaginationC.module.css'
import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useEffect } from 'react';

function PaginationC({category, pagination, totalPages  }) {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  useEffect(() => {
    pagination(page)
  })

  return (
    <div  className={styles.pagination}>
      <Pagination
        color="primary"
        size="medium"
        variant="outlined"
        shape="circular"
        // shape="rounded"
        // siblingCount="2"
        page={page}
        count={totalPages}
        sx={{
          color: 'white',
          "& .MuiPaginationItem-root": {
            color:"white",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/${category}${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  )
}

export default PaginationC
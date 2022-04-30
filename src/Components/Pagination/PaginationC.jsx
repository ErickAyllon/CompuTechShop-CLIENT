import * as React from 'react';
// import Pagination from 'react-bootstrap/Pagination'
import styles from './PaginationC.module.css'
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function PaginationC({category}) {
  // category={category}
  // productsPerPage={productsPerPage} 
  // products={products.length} 
  // pagination={pagination} 
  // currentPage={currentPage} 
  // setCurrentPage={setCurrentPage}

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  // const pageNumbers = [];
  // const [input, setInput] = useState(currentPage)
  // const max = allPokemons / pokemonsPerPage
  
  // for (let i = 1; i <= Math.ceil(max); i++) {
  //     pageNumbers.push(i)
  // }

  // function nextPage() {
  //   setCurrentPage(currentPage + 1);
  //   setInput(input - 1 );
  // }

  // function prevPage() {
  //     setCurrentPage(currentPage - 1);
  //     setInput(input - 1 );
  // }

  return (
    <div  className={styles.pagination}>
    <Pagination
      page={page}
      count={5}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${category}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />

    {/* <div style={{  padding: 30 }}>
      <Pagination style={{ width: '100%', justifyContent: 'center' }}>
        <Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
      </Pagination>
    </div> */}
    
    </div>
  )
}

export default PaginationC
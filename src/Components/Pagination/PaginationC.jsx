import * as React from "react";
// import Pagination from 'react-bootstrap/Pagination'
import styles from "./PaginationC.module.css";
import {
  Link,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PaginationC({ category }) {
  // category={category}
  // productsPerPage={productsPerPage}
  // products={products.length}
  // pagination={pagination}
  // currentPage={currentPage}
  // setCurrentPage={setCurrentPage}

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const { search } = useParams();

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
    <div className={styles.pagination}>
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
          color: "white",
          "& .MuiPaginationItem-root": {
            color: "white",
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={
              search
                ? `/s/${category}${item.page === 1 ? "" : `?page=${item.page}`}`
                : `/${category}${item.page === 1 ? "" : `?page=${item.page}`}`
            }
            {...item}
          />
        )}
      />
    </div>
  );
}

export default PaginationC;

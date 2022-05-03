import React, { useEffect } from "react";
import styles from "./PaginationC.module.css";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function PaginationC({ category, pagination, totalPages }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const { search } = useParams();

  useEffect(() => {
    pagination(page);
  });

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

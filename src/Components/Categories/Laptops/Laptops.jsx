import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../../Redux/Actions";
import PaginationC from "../../Pagination/PaginationC";
import Categories from "../Categories";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import styles from "./Laptops.module.css";
import Loader from "../../Loader/Loader";
import { useLocation } from "react-router-dom";

function Laptops() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const category = "Laptops";
  // const {category} = useParams();

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch]);

  const [order, setOrder] = useState("");

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // <Pagination
  //   productsPerPage={productsPerPage}
  //   products={products.length}
  //   pagination={pagination}
  //   currentPage={currentPage}
  //   setCurrentPage={setCurrentPage}
  // />

  return (
    <div className={styles.laptops}>
      <Categories />
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {currentProducts.map((el) => {
                return (
                  <ProductCard
                    name={el.name}
                    price={el.price}
                    image={el.image}
                    id={el.id}
                    key={el.id}
                    brand={el.brand}
                    description={el.description}
                    calification={el.calification}
                    quantity={el.quantity}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.paginationContainer}>
            <PaginationC
              category={category}
              productsPerPage={productsPerPage}
              products={products.length}
              pagination={pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Laptops;

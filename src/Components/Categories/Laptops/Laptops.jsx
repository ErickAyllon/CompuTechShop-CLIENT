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
  let products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const category = "Laptops";
  // const {category} = useParams();

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.length > 0 ? products.slice(indexFirstProduct, indexLastProduct) : null;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  useEffect(() => {
    dispatch(filterByCategory(category));
    setCurrentPage(page);
  }, [dispatch]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // End Pagination //

  return (
    <div className={styles.laptops}>
      <Categories />
      {productsFilter.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {currentProducts.map((el) => {
                return (
                  <ProductCard
                    key={el.id}
                    name={el.name}
                    price={el.price}
                    image={el.image}
                    id={el.id}
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
              pagination={pagination}
              totalPages={totalPages}
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

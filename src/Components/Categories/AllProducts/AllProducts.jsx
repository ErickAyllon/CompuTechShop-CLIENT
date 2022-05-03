import React, { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import Categories from "../Categories";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";
import styles from "./AllProducts.module.css";
import { TYPES } from "../../../Redux/Actions/shoppingCartActions";
import { shoppingInitialState } from "../../../Redux/Reducer/shoppingChartReducer";
import { shoppingReducer } from "../../../Redux/Reducer/shoppingChartReducer";

function AllProducts() {
  let products = useSelector((state) => state.allProducts);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const category = "allproducts";

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts =
    products.length > 0
      ? products.slice(indexFirstProduct, indexLastProduct)
      : null;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(getProducts());
    setCurrentPage(page);
  }, [dispatch, page]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // End Pagination Info //
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <div className={styles.allProducts}>
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
                    key={el.id}
                    id={el.id}
                    brand={el.brand}
                    description={el.description}
                    calification={el.calification}
                    quantity={el.quantity}
                    addToCart={addToCart}
                  />
                );
              })}
            </div>
          </div>
          <PaginationC
            category={category}
            pagination={pagination}
            totalPages={totalPages}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default AllProducts;

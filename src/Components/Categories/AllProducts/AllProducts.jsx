import React, { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";
import Categories from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";
import { useLocation } from "react-router-dom";
// import Filters from '../Filters/Filters'// frichieri-dev TEST

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
  const currentProducts = products.length > 0 ? products.slice(indexFirstProduct, indexLastProduct) : null;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(getProducts());
    setCurrentPage(page);
  }, [dispatch, page]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // End Pagination Info //

  // function handleFilterByBrand(e) {
  //   e.preventDefault();
  //   dispatch(filterByBrandCategories(e.target.value));
  // }

  //   const handlePrice = (e) => {
  //     e.preventDefault()
  //     dispatch(orderByPrice(e.target.value));
  //     // setCurrentPage(1)
  //     // setOrder( `Order ${e.target.value }`)
  //  }

  return (
    <div className={styles.allProducts}>
      <Categories />
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            {/* <select onChange={(e) => handleFilterByBrand(e)}>
              <option value="all">all</option>
              {brandMap?.map((t) => (
                <option value={t} key={t}>
                  {" "}
                  {t}{" "}
                </option>
              ))}
            </select> */}
            {/* <select onChange={(e)=> handlePrice(e)}>
                  <option value='Inc Price'>Inc Price</option> 
                  <option value='Dec Price'>Dec Price</option>
         </select> */}
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

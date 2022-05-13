import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions";
import Categories from "../Categories";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";
import styles from "./AllProducts.module.css";
import { TYPES } from "../../../Redux/Actions/shoppingCartActions";
import ProductNotFound from "../../ProductNotFound/ProductNotFound";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar/Navbar";

function AllProducts() {
  let products = useSelector((state) => state.allProducts);
  const productsFilter = useSelector((state) => state.productsFilter);
  const userActive = useSelector((state) => state.userActive);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  // const category = "allproducts";
  const category = "Allproducts";
  // console.log(userActive);

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage);
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
  }, [dispatch]);
  // End Pagination Info //
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  // console.log(products);
  return (
    <div className={styles.allProducts}>
      <NavBar />
      <Categories />
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
              {productsFilter.length > 0 ? (
                currentProducts?.map((el) => {
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
                })
              ) : (
                <ProductNotFound />
              )}
            </div>
          </div>
          {productsFilter.length > 0 ? (
            <PaginationC category={category} totalPages={totalPages} />
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default AllProducts;

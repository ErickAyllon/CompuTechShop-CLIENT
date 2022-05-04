import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../../Redux/Actions";
import Categories from "../Categories";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";
import styles from "./Keyboards.module.css";
import ProductNotFound from "../../ProductNotFound/ProductNotFound";

function Keyboards() {
  let products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const category = "Keyboards";
  

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage)
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.length > 0 ? products.slice(indexFirstProduct, indexLastProduct) : null;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch]);
  // End Pagination //

  return (
    <div className={styles.keyboards}>
      <Categories />
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
            {
              productsFilter.length > 0 ?
              currentProducts.map((el) => {
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
              })
              : <ProductNotFound />
              }
            </div>
          </div>
          {
            productsFilter.length > 0 ?
              <PaginationC
                category={category}
                totalPages={totalPages}
              />
          : null
          }
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Keyboards;
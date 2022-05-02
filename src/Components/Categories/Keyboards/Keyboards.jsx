import React, { useState, useEffect } from "react";
import styles from "./Keyboards.module.css";
import Categories from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../../Redux/Actions";
import ProductCard from "../../ProductCard/ProductCard";
import Filter from "../../Filter/Filter";
import PaginationC from "../../Pagination/PaginationC";
import Loader from "../../Loader/Loader";
import { useLocation } from "react-router-dom";

function Keyboards() {
  let products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const category = "Keyboards";
  

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
    <div className={styles.keyboards}>
      <Categories />
      {productsFilter.length > 0 ? (
        <>
<<<<<<< HEAD
      <div className={styles.productsContainer}>
        {/* <Filter /> */}
      
        <div className={styles.productsCardsContainer}>

          {currentProducts.map((el) => {
            return (
                <ProductCard 
                  name={el.name} 
                  price={el.price} 
                  image={el.image} 
                  id={el.id} 
                  brand={el.brand} 
                  description={el.description} 
                  calification={el.calification} 
                  quantity={el.quantity}/>
            )
          })}
        </div>
      </div>
      <PaginationC 
          category={category}
          pagination={pagination} 
          totalPages={totalPages}
        />
      </>
          :
          <Loader />
      }
=======
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
          <PaginationC
            category={category}
            pagination={pagination}
            totalPages={totalPages}
          />
        </>
      ) : (
        <Loader />
      )}
>>>>>>> c400b0efebcf3a39154aedac06bb6d5286a105d9
    </div>
  );
}

export default Keyboards;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../../../../Redux/Actions";
import ProductCardAdmin from '../../ProductCardAdmin/ProductCardAdmin'
import CategoriesAdmin from '../CategoriesAdmin'
import Filter from "../../../../Filter/Filter";
import PaginationCAdmin from "../../../Products/Pagination/PaginationCAdmin";
import Loader from "../../../../Loader/Loader";
import styles from "./CategoryAdmin.module.css";
import ProductNotFound from "../../../../ProductNotFound/ProductNotFound";
import { useParams } from "react-router-dom";
import AdminNav from "../../../AdminNav/AdminNav";
import AdminNav2 from "../../../AdminNav/AdminNav2";

function CategoryAdmin() {
  const {category} = useParams();
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;

  const currentPage = useSelector((state) => state.currentPage)
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.length > 0 ? products.slice(indexFirstProduct, indexLastProduct) : null;
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch, category]);

  return (
    <div className={styles.category}>
    <AdminNav />
    <AdminNav2 />
      <CategoriesAdmin />
      {products.length > 0 ? (
        <>
          <div className={styles.productsContainer}>
            <Filter />
            <div className={styles.productsCardsContainer}>
            {
              productsFilter.length > 0 ?
              currentProducts.map((el) => {
                return (
                  <ProductCardAdmin
                    name={el.name}
                    price={el.price}
                    image={el.image}
                    id={el.id}
                    key={el.id}
                    brand={el.brand}
                    description={el.description}
                    calification={el.calification}
                    quantity={el.quantity}
                    update={true}
                    delet={true}
                  />
                );
              })
              : <ProductNotFound />
              }
            </div>
          </div>
          {
            productsFilter.length > 0 ?
              <PaginationCAdmin
                category={category}
                totalPages={totalPages}
              />
          : null
          }
        </>
      ) : (
        <ProductNotFound />
      )}
    </div>
  );
}

export default CategoryAdmin;
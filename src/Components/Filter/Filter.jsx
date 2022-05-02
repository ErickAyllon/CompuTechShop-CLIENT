import styles from "./Filter.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrandCategoriesFilter } from "../../Redux/Actions";

function Filter() {
  const allProductsFilter = useSelector((state) => state.allProductsFilter);
  const productsFilter = useSelector((state) => state.productsFilter);

  const dispatch = useDispatch();

  function handleFilterByBrandCategories(e) {
    e.preventDefault();
    dispatch(filterByBrandCategoriesFilter(e.target.value));
  }

  const setBrand = new Set();

  const unicBrand = productsFilter.reduce((acc, marca) => {
    if (!setBrand.has(marca.brand)) {
      setBrand.add(marca.brand, marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  const brandMap = unicBrand.map((el) => el.brand);

  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>
        <select onChange={(e) => handleFilterByBrandCategories(e)}>
          <option value="all">all</option>
          {brandMap?.map((t) => (
            <option value={t} key={t}>
              {" "}
              {t}{" "}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;

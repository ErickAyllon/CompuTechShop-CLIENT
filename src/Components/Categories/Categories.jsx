import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories() {

  return (
    <div className={styles.categories}>
      <div className={styles.category}>
        <Link to="/allproducts">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/package-delivery-logistics.png"
            alt="categoryLogo"
          />
        </Link>
        <span>All Products</span>
      </div>
      <div className={styles.category}>
        <Link to="/laptops">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/laptop.png"
            alt="categoryLogo"
          />
        </Link>
        <span>Laptops</span>
      </div>
      <div className={styles.category}>
        <Link to="/monitors">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/imac.png"
            alt="categoryLogo"
          />
        </Link>
        <span>Monitors</span>
      </div>
      <div className={styles.category}>
        <Link to="/mouses">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/generic-mouse.png"
            alt="categoryLogo"
          />
        </Link>
        <span>Mouses</span>
      </div>
      <div className={styles.category}>
        <Link to="/headsets">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/headset.png"
            alt="categoryLogo"
          />
        </Link>
        <span>Headsets</span>
      </div>
      <div className={styles.category}>
        <Link to="/keyboards">
          <img
            src="https://img.icons8.com/ios/100/ffffff/keyboard.png"
            alt="categoryLogo"
          />
        </Link>
        <span>Keyboards</span>
      </div>
    </div>
  );
}

export default Categories;

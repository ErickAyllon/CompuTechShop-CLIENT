import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from "./PurchaseSummary.module.css"

export const PurchaseConfirm = () => {
  const ca = useSelector(state => state.shopping)
  return (
    <>
      <div className={styles.productNotFound}>
        <div className={styles.productNotFoundContainer}>

          <h1>Redirect to MercadoPago</h1>
          <div className={styles.productNotFoundText}>
          </div>
        </div>
      </div>
      <div>
        {setTimeout(function () {
          window.location.href = ca.toString()
        }, 4000)}
      </div>
    </>
  )
}

import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.copyrightFooter}>
            <p> Copyright © 2022 The pibe's store S.R.L.</p>
            <p>Av. Siempre Viva 123, Piso 5, CP 1234, Alto Ecommerce, Argentina</p>
          </div>
          <div className={styles.extrasFooter}>
            <p>Help</p>
            <p>Frequent Questions</p>
            <p>Work with us</p>
            <p>About</p>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/nolan/64/instagram-new.png" alt="socialLogo"/>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/nolan/64/facebook-new.png" alt="socialLogo"/> 
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer
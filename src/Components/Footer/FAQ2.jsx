import React, { useState } from 'react';
import styles from './FAQ.module.css'

const FAQ2 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.background}> 
    <div className={styles.accordion}>
      <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div >{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
    </div>
  );
};

export default FAQ2;

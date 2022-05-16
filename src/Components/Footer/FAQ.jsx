import React from 'react';
import FAQ2 from "./FAQ2" 
import {Link} from 'react-router-dom'
import styles from './FAQ.module.css'
const FAQ = () => {

  const accordionData = [
    {
      title: 'Where do I find my products? ',
      content: `You can find your products in your profile after you signed up properly`
    },
    {
      title: 'How can I change the shippment adress?',
      content: `You must go to your profile and update your address.`
    },
    {
      title: 'Which is your range of shipment?',
      content: `Every country within Latinamerica, USA and Canada`
    },
    {
      title: 'How do I rate the product?',
      content: `You can rate your purchase by clicking on the stars just below the the article you've just bought. Also, you can leave a comment giving further details of your experience..`
    }
  ];


  return (
    <div className={styles.background}> 
      <h1>Frequently Asked Questions</h1>
      <div className={styles.accordionTitle}>
        {accordionData.map(({ title, content }) => (
          <FAQ2 title={title} content={content} />
        ))}
      </div>
      <Link to='/'> 
      <button>Back</button>
      </Link>
    </div>
  );
};

export default FAQ;
import React, {useState} from 'react';
import FAQ2 from './FAQ2.jsx';
import styles from './FAQ.module.css'
import NavBar from '../NavBar/Navbar.jsx';


const FAQ = () => {

  const [isActive, setIsActive] = useState(false);
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  const { title, content } = accordionData;

  return (
    <div className={styles.faq}>
      <NavBar/>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <FAQ2 title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
import React, {useState} from 'react';
import FAQ2 from './FAQ2.jsx';
import {Link} from 'react-router-dom';


const FAQ = () => {

  // const [isActive, setIsActive] = useState(false);
  // const accordionData = [
  //   {
  //     title: 'Section 1',
  //     content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
  //     laborum cupiditate possimus labore, hic temporibus velit dicta earum
  //     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
  //     voluptatem.`
  //   },
  //   {
  //     title: 'Section 2',
  //     content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
  //     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
  //     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
  //     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
  //     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
  //     Repudiandae, mollitia id reprehenderit a ab odit!`
  //   },
  //   {
  //     title: 'Section 3',
  //     content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
  //     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
  //     dolor ut sequi minus iste? Quas?`
  //   }
  // ];

  // const { title, content } = accordionData;

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <h2>Do you have problems with your delivery?</h2>
      <h4>You can call us at 0-800-122-4545 or reach your local post service, they will provide help in the matter</h4>
      <h2>Your product arrived defectuous?</h2>
      <h4>You can call us at 0-800-122-4545 or send us an email to myproductisbroken@solutions.com</h4>
      <h2>Web page is not working?</h2>
      <h4>Reach us at our <a href='wa.link/559zp0'>whatsapp</a>! Our programming team will be glad to help you!</h4>
      <Link to='/'>
        <button>Back</button>
        </Link>
    
    </div>
   
  );
};

export default FAQ;


// <div>
// <h1>Frequently Asked Questions</h1>
// <div className="accordion">
//   {accordionData.map(({ title, content }) => (
//     <FAQ2 title={title} content={content} />
//   ))}
// </div>
// </div>
import React from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/Navbar'
import Footer from '../../Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.homeContent}>

      <div style={{ display: 'block', width: 500, padding: 30 }}>
        <h4>React-Bootstrap Carousel bebes</h4>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src="https://avatars.githubusercontent.com/u/85033184?v=4" alt="One" />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src="https://avatars.githubusercontent.com/u/85701990?v=4" alt="Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src="https://avatars.githubusercontent.com/u/91556136?v=4" alt="Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  
        {/* <h1>Home</h1> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
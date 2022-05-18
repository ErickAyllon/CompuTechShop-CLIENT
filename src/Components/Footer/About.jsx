import React from 'react'
import styles from './About.module.css'
import {Link} from 'react-router-dom'
import GitHubIcon from './GitHubIcon.png'
import LinkedInIcon from './LinkedInIcon.png'
import Martin from './Martin.png'
import henry from './henry.png'

export default function About() {
  return ( 
    
   <div> 

    <div className={styles.aboutSection}>
      <div className={styles.box1}> 
        <h1>This is the CompuTechShop Dreamteam!</h1>
          <h2>We are a young company made by young people who are passionate about technology. 
                Our mission is to bring options to those who seek it and to provide them with the best possible experience!
          </h2>
          <div className={styles.box1}>
          <h2>Our Team</h2>
      </div>
    </div>
  </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.container}> 
              <img className={styles.img} src={henry} alt="Jane"   />
               <div className={styles.box1}>
                <h2>Francisco Geary</h2>
                  <p>An amazing geek &#129299;</p>
                  <p>Product Manager of CompuTechShop</p>
                  <p>moctesuma260@gmail.com</p>
                      <div className={styles.div}>
                        <a target="_blank"href='https://github.com/elHenryettas'> 
                        <img src={GitHubIcon} alt="Not found" />
                        </a>
                        <a target="_blank"href="https://www.linkedin.com/in/franciscogeary43829/"> 
                        <img src={LinkedInIcon} alt="Not found" />
                        </a>
                        </div>
                      </div>
                      
   
              </div>
            </div>
          </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.container}> 
              <img className={styles.img} src='https://media-exp1.licdn.com/dms/image/C4D03AQG6ErOXSOOKjQ/profile-displayphoto-shrink_800_800/0/1649178118474?e=1658361600&v=beta&t=RakfMNQecyqUjaUtfqRQaAcF7rhMXj4hWnkiMY0C31E' alt='not found' /> 
            <div className={styles.box1}> 
               <h2>Lucas Mandirola </h2>
                <p>An amazing geek &#129299;</p>
                <p>CTO of CompuTechShop.</p>
                <p>llucasmandirola.staclara@gmail.com</p>
           
                      <div className={styles.div}>
                        <a target="_blank" href='https://github.com/lucasmandirola'> 
                        <img src={GitHubIcon} alt="Not found" />
                        </a>
                        <a target="_blank"href="https://www.linkedin.com/in/lucasmandirola/"> 
                        <img src={LinkedInIcon} alt="Not found" />
                        </a>
                      </div>
                  </div>
                  
          
          </div>
         </div>
        </div>

        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <img className={styles.img} src={Martin} alt="not found"   />
        <div className={styles.box1}> 
          <h2>Martin Raschinsky</h2>
          <p>An amazing geek &#129299;</p>
          <p>General Manager.</p>
          <p>jane@example.com</p>
          <div className={styles.div}>
            <a target="_blank"href='https://github.com/TinchoRas'> 
            <img src={GitHubIcon} alt="Not found" />
            </a>
            <a target="_blank"href="https://www.linkedin.com/in/mart%C3%ADn-raschinsky-083546158/"> 
            <img src={LinkedInIcon} alt="Not found" />
            </a>
            </div>
          </div>
          
 
        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 

          <img className={styles.img} src="https://media-exp1.licdn.com/dms/image/C4D03AQGjmDV9hvrp8w/profile-displayphoto-shrink_800_800/0/1648278379780?e=1658361600&v=beta&t=jVXIZzXIOdhiii_ghlTinVyXqqi42H0yaFhpZv3GLm8" alt="Jane" />
        <div className={styles.box1}> 
          <h2>Erick Ayllon</h2>
          <p>An amazing geek &#129299;</p>
          <p>Shipping Manager.</p>
          <p>erickayllon@gmail.com</p>
          <div className={styles.div}>
            <a target="_blank"href='https://github.com/ErickAyllon'> 
            <img src={GitHubIcon} alt="Not found" />
            </a>
            <a target="_blank"href="https://www.linkedin.com/in/erick-ayllon/"> 
            <img src={LinkedInIcon} alt="Not found" />
            </a>
          </div>
          </div>
    
        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <img className={styles.img} src="https://media-exp1.licdn.com/dms/image/C4D03AQFt2f0Ou7TG7A/profile-displayphoto-shrink_800_800/0/1648156864321?e=1658361600&v=beta&t=qukFWLt_sKsQTgv4pAj_exb8A0P5LEYyahV3GpBZQyg" alt="Jane" />
          <div className={styles.box1}> 

          <h2>Jesús Rafael Matute Díaz </h2>
          <p>An amazing geek &#129299;</p>
          <p>Executive Chairman</p>
          <p>mttrox@gmail.com</p>
          <div className={styles.div}>
            <a target="_blank"href='https://github.com/RoxZkiL'> 
            <img src={GitHubIcon} alt="Not found" />
            </a>
            <a target="_blank"href="https://www.linkedin.com/in/jes%C3%BAs-matute-079b0b209/"> 
            <img src={LinkedInIcon} alt="Not found" />
            </a>
          </div>

          </div>
          
   
        </div>
        </div>
        </div>
  
      <div className={styles.column}>
      <div className={styles.card}>
      <div className={styles.container}> 
        <img className={styles.img} src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/275424007_10228542708572066_511071485883864013_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=174925&_nc_ohc=cCelNInGZw8AX-fUrwk&_nc_ht=scontent.faep14-2.fna&oh=00_AT_KxvwdafF3JNyibCgW69m4pHibr66XvsMspfgpwAx77Q&oe=6286EF1F" alt="Mike"  />
        <div className={styles.box1}> 
          <h2>Fabricio Richieri</h2>
          <p >An amazing geek &#129299;</p>
          <p>CEO of CompuTechShop</p>
          <p>fabririchieri@gmail.com</p>
          <div className={styles.div}>
            <a target="_blank"href='https://github.com/FARichieri'> 
            <img src={GitHubIcon} alt="Not found" />
            </a>
            <a target="_blank"href="https://www.linkedin.com/in/frichieri/"> 
            <img src={LinkedInIcon} alt="Not found" />
            </a>
          </div>
          </div>
    
      </div>
      </div>
          <Link to='/'>
    <button className={styles.button} >Back </button>
        </Link>    
    
  </div>

  </div>
  
  

  )
}
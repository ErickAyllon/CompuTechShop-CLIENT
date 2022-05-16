import React from 'react'
import styles from './About.module.css'
import {Link} from 'react-router-dom'
import GitHubIcon from './GitHubIcon.png'
import LinkedInIcon from './LinkedInIcon.png'
import Martin from './Martin.png'

export default function About() {
  return ( 
    <div className={styles.fondo}> 
    <div className={styles.aboutSection}>
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>

  <h2 className={styles.text}>Our Team</h2>
      
         
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <h2>Francisco Segismundo Rodríguez</h2>
          <p>An amazing geek &#129299;</p>
          <p>Some text that describes.</p>
          <p>jane@example.com</p>
          <img className={styles.img} src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwcGV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Jane"   />
       
          <p><button className={styles.button}>Contact</button></p>

        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <h2>Lucas Mandioca</h2>
          <p>An amazing geek &#129299;</p>
          <p>Some text that describes.</p>
          <p>jane@example.com</p>
           
          <div className={styles.div}>
            <a href='https://github.com/RoxZkiL'> 
            <img src={GitHubIcon} alt="Not found" />
            </a>
            <a href="https://www.linkedin.com/in/jes%C3%BAs-matute-079b0b209/"> 
            <img src={LinkedInIcon} alt="Not found" />
            </a>
          </div>


          <img className={styles.img} src='https://media-exp1.licdn.com/dms/image/C4D03AQG6ErOXSOOKjQ/profile-displayphoto-shrink_800_800/0/1649178118474?e=1658361600&v=beta&t=RakfMNQecyqUjaUtfqRQaAcF7rhMXj4hWnkiMY0C31E' alt='not found' /> 

          <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <h2>Martin Raschinsky</h2>
          <p>An amazing geek &#129299;</p>
          <p>Some text that describes.</p>
          <p>jane@example.com</p>
          <img className={styles.img} src={Martin} alt="not found"   />
          <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <h2>Erick Ayllon</h2>
          <p>An amazing geek &#129299;</p>
          <p>Some text that describes.</p>
          <p>jane@example.com</p>
          <img className={styles.img} src="https://media-exp1.licdn.com/dms/image/C4D03AQGjmDV9hvrp8w/profile-displayphoto-shrink_800_800/0/1648278379780?e=1658361600&v=beta&t=jVXIZzXIOdhiii_ghlTinVyXqqi42H0yaFhpZv3GLm8" alt="Jane" />
          <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card}>
        <div className={styles.container}> 
          <h2>Jesús Rafael Matute Díaz </h2>
          <p>An amazing geek &#129299;</p>
          <p>Some text that describes.</p>
          <p>jane@example.com</p>
          <img className={styles.img} src="https://media-exp1.licdn.com/dms/image/C4D03AQFt2f0Ou7TG7A/profile-displayphoto-shrink_800_800/0/1648156864321?e=1658361600&v=beta&t=qukFWLt_sKsQTgv4pAj_exb8A0P5LEYyahV3GpBZQyg" alt="Jane" />
          <p><button className={styles.button}>Contact</button></p>
        </div>
        </div>
        </div>
  
      <div className={styles.column}>
      <div className={styles.card}>
      <div className={styles.container}> 
        <img className={styles.img} src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/275424007_10228542708572066_511071485883864013_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=174925&_nc_ohc=cCelNInGZw8AX-fUrwk&_nc_ht=scontent.faep14-2.fna&oh=00_AT_KxvwdafF3JNyibCgW69m4pHibr66XvsMspfgpwAx77Q&oe=6286EF1F" alt="Mike"  />
        
          <h2>Fabricio Richieri</h2>
          <p >An amazing geek &#129299;</p>
          <p>Some .</p>
          <p>mike@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        
      </div>
      </div>

     
      

{/*   
    <div class="column">
      <div class="card">
        <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
        <div class="container">
          <h2>John Doe</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div> */}
  </div>
  </div>
  

  )
}
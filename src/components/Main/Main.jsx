import hello from '../../assets/Hello.gif'
import girl from '../../assets/GirlWithLaptop.png'
import './Main.css';
import { Fade } from "react-awesome-reveal";

const Main = () => {
   return (
      <div id='home'>
         <div id='main-section-left'>
            <Fade duration={2500} direction='down'>
               <p id='text-line1'> Hello <img src={hello} width="25" height="25" alt="Hello" />, I'm </p>
            </Fade>
            <Fade duration={1000} delay={600} direction='left'>
               <h1 id='text-line2'>Akila Arunasatesan</h1>
            </Fade>
            <Fade duration={2500} delay={800} direction='down'>
               <h2 id='text-line3'>Front-End Developer</h2>
            </Fade>
            <Fade duration={2500} delay={1200} direction='down'>
               <p id='text-line4'>3 Years of Experience</p>
            </Fade>
            <Fade duration={2500} delay={1600} direction='up'>
               <button id='contact-button'><a href='#contact'>CONTACT</a></button>
            </Fade>
         </div>
         <div id='main-section-right'>
            <Fade duration={2500} direction='right'>
               <img src={girl} width="500" height="500" alt='A Girl sitting with Laptop'/>
            </Fade>
         </div>
      </div>
   )
}
export default Main
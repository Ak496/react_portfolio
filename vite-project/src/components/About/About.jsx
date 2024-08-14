import { Fade } from 'react-awesome-reveal'
import './About.css'
import HTML5 from "../../assets/HTML5.svg"
import CSS3 from "../../assets/CSS3.svg"
import Javascript from "../../assets/Javascript.svg"
import react from '../../assets/React.svg'
import redux from '../../assets/Redux.svg'
import ProfilePic from '../../assets/ProfilePic.jpg'
const About = () => {
    return (
        <div id="about">
            <div id="about-details-section">
                <Fade duration={1000} delay={400} direction='left'>
                    <p>
                        I am a dedicated Front-end Developer with over 3 years of experience in
                        crafting dynamic and interactive web applications. My expertise includes working with React and Redux,
                        and I have a strong foundation in HTML5, CSS3 and Javascript (ES6+)
                    </p>
                </Fade>
                <Fade duration={1000} delay={800} direction='left'>
                    <p>
                        At <b>Infosys Limited</b>, I contributed to significants projects such as Intel Corporation's FaSTr Derivatives,
                        developing modular React Components and implementing Redux for state management. I excel in collaborating with cross-functional
                        teams and engaging closely with clients to deliver solutions that meet both user and business needs.
                    </p>
                </Fade>
                <Fade duration={1000} delay={1200} direction='left'>
                    <p>
                        I am passionate about delivering high-quality work and am always eager to tackle new challenges in the tech industry
                    </p>
                </Fade>
                <Fade duration={1000} delay={1600} direction='left'>
                    <h2>Skills:</h2>
                    <div id="skill-img-container">
                        <img src={HTML5} width="50" height="50" alt='HTML5Icon' />
                        <img src={CSS3} width="50" height="50" alt='CSS3Icon' />
                        <img src={Javascript} width="50" height="50"  alt='JavascriptIcon'/>
                        <img src={react} width="50" height="50" alt='ReactIcon'/>
                        <img src={redux} width="50" height="50" alt='ReduxIcon'/>
                    </div>
                </Fade>
            </div>
            <div id="about-profilePic-section">
                <img src={ProfilePic} width="350" height="400" alt='ProfilePicture' />
            </div>
        </div>
    )
}
export default About;
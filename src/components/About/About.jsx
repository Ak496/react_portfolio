import { Fade } from 'react-awesome-reveal'
import './About.css'
import ProfilePic from '../../assets/ProfilePic.jpg'
const About = () => {
    return (
        <div id="about">
            <h2>ABOUT ME</h2>
            <div id="about-content">
                <div id="about-details-section">
                    <Fade duration={1000} delay={400} direction='left'>
                        <p>
                            I am a dedicated Front-end Developer with over 3 years of experience in
                            crafting dynamic and interactive web applications. My expertise includes working with React and Redux,
                            and I have a strong foundation in HTML5, CSS3 and Javascript (ES6+).
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
                            I am passionate about delivering high-quality work and am always eager to tackle new challenges in the tech industry.
                        </p>
                    </Fade>
                </div>
                <div id="about-profilePic-section">
                    <img src={ProfilePic} width="400" height="400" alt='ProfilePicture' />
                </div>
            </div>
        </div>
    )
}
export default About;
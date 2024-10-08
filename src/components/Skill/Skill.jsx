import { Fade } from 'react-awesome-reveal';
import HTML5 from "../../assets/HTML5.svg"
import CSS3 from "../../assets/CSS3.svg"
import Javascript from "../../assets/Javascript.svg"
import react from '../../assets/React.svg'
import redux from '../../assets/Redux.svg'
import materialUI from '../../assets/MaterialUI.svg'
import './Skill.css'

const Skill = () => {
    return (
        <div id='skill'>
            <h2>SKILLS</h2>
            <div id="skill-img-container">
                <Fade duration={1000} direction='left'>
                    <div className="skill-set">
                        <img src={HTML5} alt='HTML5Icon' />
                        <img src={CSS3} alt='CSS3Icon' />
                        <img src={Javascript} alt='JavascriptIcon' />
                    </div>
                </Fade>
                <Fade duration={1000} delay={500} direction='left'>
                    <div className="skill-set">
                        <img src={materialUI} alt='MaterialUIIcon' />
                        <img src={react} alt='ReactIcon' />
                        <img src={redux} alt='ReduxIcon' />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Skill;
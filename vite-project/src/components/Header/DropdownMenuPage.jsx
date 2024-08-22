import "./DropdownMenuPage.css";
import Resume from "../../assets/Resume.pdf";
const DropdownMenuPage = () => {
    return (
        <div id="menu-container">
            <ul id="menu-dropDown">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="#skill">SKILLS</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <a href={Resume} download="Akila_Resume" target='_blank'>
                    <li><button id="menu-resume-button">RESUME</button></li>
                </a>
            </ul>
        </div>
    )
}

export default DropdownMenuPage;
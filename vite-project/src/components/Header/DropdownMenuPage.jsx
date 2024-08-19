import "./DropdownMenuPage.css"
import CloseIcon from "../../assets/CloseIcon.svg"
const DropdownMenuPage = ({ onClickHandler }) => {
    return (
        <div id="menu-container">
            <img src={CloseIcon} onClick={onClickHandler} />
            <ul id="menu-dropDown">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><button id="resume-button">RESUME</button></li>
            </ul>
        </div>
    )
}

export default DropdownMenuPage;
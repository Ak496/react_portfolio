import './Header.css';
import Menu from "../../assets/Menu.svg";
import Close from "../../assets/CloseIcon.svg";
import { useState } from 'react';
import DropdownMenuPage from './DropdownMenuPage';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const menuHandler = () => {
        setMenuOpen(!isMenuOpen);
        setShowDropDown(!showDropDown)
    }
    return (
        <div id="header-container">
            <nav id="header-section">
                <h3 id="header-section-heading">AKILA ARUNASATESAN</h3>
                <img id="menu-icon"
                    src={isMenuOpen ? Close : Menu}
                    alt={isMenuOpen ? "Close" : "Menu"}
                    onClick={menuHandler}
                />
                {showDropDown && <DropdownMenuPage/>}
                <ul id="nav-link-list">
                    <li id="nav-link-home"><a href="#home">HOME</a></li>
                    <li id="nav-link-about"><a href="#about">ABOUT ME</a></li>
                    <li id="nav-link-skills"><a href="#skill">SKILLS</a></li>
                    <li id="nav-link-contact"><a href="#contact">CONTACT</a></li>
                    <li><button id="resume-button">RESUME</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

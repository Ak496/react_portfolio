import './Header.css'

const Header = () => {
    return (
        <div id="header-section">
            <nav>
                <ul id="nav-link-list">
                    <li><a id="nav-link-home" href="#home">HOME</a></li>
                    <li><a id="nav-link-about" href="#about">ABOUT ME</a></li>
                    <li><a id="nav-link-contact" href="#contact">CONTACT</a></li>
                    <li><button id="resume-button">RESUME</button>   </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header
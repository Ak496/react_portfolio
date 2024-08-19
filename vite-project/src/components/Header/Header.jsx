import './Header.css'

const Header = () => {
    return (
        <div id="header-container">
            <nav id="header-section">
                <h3 id="header-section-heading">AKILA ARUNASATESAN</h3>
                <ul id="nav-link-list">
                    <li id="nav-link-home"><a href="#home">HOME</a></li>
                    <li id="nav-link-about"><a href="#about">ABOUT ME</a></li>
                    <li id="nav-link-contact"><a href="#contact">CONTACT</a></li>
                    <li><button id="resume-button">RESUME</button></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header
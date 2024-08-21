import "./DropdownMenuPage.css"
const DropdownMenuPage = () => {
    return (
        <div id="menu-container">
            <ul id="menu-dropDown">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="#skill">SKILL</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><button id="menu-resume-button">RESUME</button></li>
            </ul>
        </div>
    )
}

export default DropdownMenuPage;
import reactIcon from "../../assets/react-icon.svg"
import githubIcon from "../../assets/Github.svg"
import linkedin from "../../assets/Linkedin.svg"
import gmailIcon from "../../assets/gmail-icon.svg"
import "./Footer.css"
const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-content1">
                <p>This website was made with </p> &nbsp;
                <img src={reactIcon} width="20" height="20" />
            </div>
            <div id="social-media">
                <a
                    href="https://www.linkedin.com/in/akila-arunasatesan-994a14221/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" width="30" height="30" />
                </a>
                <a
                    href="https://github.com/Ak496/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" width="30" height="25" />
                </a>
                <a href="mailto:akilaa.arun24@gmail.com">
                    <img src={gmailIcon} alt="Email"  width="30" height="30" />
                </a> 
            </div>
            <p id="footer-content2">&copy;copyright. All rights reserved.</p>
        </div>
    )
}
export default Footer;
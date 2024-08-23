import reactIcon from "../../assets/react-icon.svg"
import githubIcon from "../../assets/Github.svg"
import linkedin from "../../assets/Linkedin.svg"
import gmailIcon from "../../assets/gmail-icon.svg"
import "./Footer.css"
const Footer = () => {
    return (
        <div id="footer">
            <p>&copy; 2024</p>
            <div id="footer-content">
                <p>This website was made with </p> &nbsp;
                <img src={reactIcon} width="20" height="20" />
            </div>
            <div id="social-media">
                <a
                    href="https://www.linkedin.com/in/akila-arunasatesan-994a14221/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" width="40" height="40" />
                </a>
                <a
                    href="https://github.com/Ak496/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" width="40" height="40" />
                </a>
                <a href="mailto:akilaa.arun24@gmail.com">
                    <img src={gmailIcon} alt="Email"  width="40" height="40" />
                </a> 
            </div>
        </div>
    )
}
export default Footer;
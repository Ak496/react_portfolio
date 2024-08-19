import reactIcon from "../../assets/React.svg"
import "./Footer.css"
const Footer = () =>{
    return(
        <div id="footer">
           <h4>This webiste is built using </h4>
           <img src={reactIcon} width="20" height="20"/>
        </div>
    )

}
export default Footer;
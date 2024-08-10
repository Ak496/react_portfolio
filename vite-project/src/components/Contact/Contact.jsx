import { Fade } from "react-awesome-reveal"
import phoneIcon from "../../assets/PhoneIcon.svg"
import emailIcon from "../../assets/EmailIcon.svg"
import locationIcon from "../../assets/LocationIcon.svg"
import "./Contact.css"

const Contact = () => {
    return (<div id="contact">
        <div id="contact-sections">
            <div id="contact-details-section">
                <div id="email-section" >
                    <img src={emailIcon} alt="Email" width="35" height="35"/>
                    <h4>akilaa.arun24@gmail.com</h4>
                </div>
                <div id="phone-section"> 
                    <img src={phoneIcon} alt="Phone no" width="35" height="35"/>
                    <h4>(+91) 8903720411</h4>
                </div>
                <div id="location-section">
                    <img src={locationIcon} alt="location" width="35" height="35"/>
                    <h4>Chennai,Tamilnadu</h4>
                </div>
            </div>
            <div id="contact-form-section">
                <h2 id="contact-form-heading">Send Me Your Message</h2>
                <form id="contact-form">
                    <div id="contact-form-inputs">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <textarea placeholder="Message" required></textarea>
                    <button id="form-submit">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>)
}
export default Contact;
import phoneIcon from "../../assets/PhoneIcon.svg"
import emailIcon from "../../assets/EmailIcon.svg"
import locationIcon from "../../assets/LocationIcon.svg"
import "./Contact.css"
import { useRef, useState } from "react"
import Notification from "./Notification"
import emailjs from '@emailjs/browser';
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_ID } from '../../common.js'

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState("");
    const [valid, setValid] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const newErrors = validateForm(formData)
        if (Object.keys(newErrors).length === 0) {
            setValid(true);
        }
        else {
            setValid(false);
        }
        setErrors(newErrors);
    };

    const validateForm = (data) => {
        const errors = {};
        if (data.username.length < 5) {
            errors.username = "Name should be atleast 5 characters";
        }
        if (data.username.length > 15) {
            errors.username = "Name should not be greater than 15 characters";
        }
        if (data.username.length <= 0) {
            errors.username = "Name is required";
        }

        if (data.email.length <= 0) {
            errors.email = "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (data.message.length <= 0) {
            errors.message = "Please enter your message";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_KEY,
                })
                .then(
                    () => {
                        setNotificationMsg("Message sent successfully!");
                        setShowNotification(true);
                    },
                    (error) => {
                        setNotificationMsg("Network error occurred! Please Try later");
                        setShowNotification(true);
                    },
                );
        }
    }

    const notificationClosehandler = () => {
        setShowNotification(false);
        setFormData({
            username: '',
            email: '',
            message: ''
        })
    }

    return (
        <div id="contact">
            <h2>CONTACT</h2>
            <div id="contact-sections">
                <div id="contact-details-section">
                    <div id="email-section" >
                        <img src={emailIcon} alt="Email" width="35" height="35" />
                        <h4>akilaa.arun24@gmail.com</h4>
                    </div>
                    <div id="phone-section">
                        <img src={phoneIcon} alt="Phone no" width="35" height="35" />
                        <h4>(+91) 8903720411</h4>
                    </div>
                    <div id="location-section">
                        <img src={locationIcon} alt="location" width="35" height="35" />
                        <h4>Chennai,Tamilnadu</h4>
                    </div>
                </div>
                <div id="contact-form-section">
                    <h3 id="contact-form-heading">Send Me Your Message</h3>
                    <form ref={form} id="contact-form" onSubmit={handleSubmit} noValidate>
                        <div id="contact-form-inputs">
                            <div id="name-input-container">
                                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Name" required />
                                {errors.username && <h4 id="error-display">{errors.username}</h4>}
                            </div>
                            <div id="email-input-container">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                                {errors.email && <h4 id="error-display">{errors.email}</h4>}
                            </div>
                        </div>
                        <div>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
                            {errors.message && <h4 id="error-display">{errors.message}</h4>}
                        </div>
                        <button id="form-submit" disabled={!valid}>SUBMIT</button>
                    </form>
                </div>
            </div>
            {showNotification && <Notification onClose={notificationClosehandler} message={notificationMsg} />}
        </div>)
}
export default Contact;
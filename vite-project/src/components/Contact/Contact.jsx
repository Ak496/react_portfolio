import phoneIcon from "../../assets/PhoneIcon.svg"
import emailIcon from "../../assets/EmailIcon.svg"
import locationIcon from "../../assets/LocationIcon.svg"
import "./Contact.css"
import { useState } from "react"
import Notification from "./Notification"

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const newErrors = validateForm(formData)
        setErrors(newErrors);
    };

    const validateForm = (data) => {
        const errors = {};
        if (data.username.length < 5) {
            errors.username = "Name should be atleast of 5 characters";
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
            setShowNotification(true);
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
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
                    <form id="contact-form" onSubmit={handleSubmit} noValidate>
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
                        <button id="form-submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            {showNotification && <Notification onClose={notificationClosehandler} />}
        </div>)
}
export default Contact;
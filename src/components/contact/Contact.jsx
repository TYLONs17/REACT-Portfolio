import "./contact.css"
import call from "../../assets/icons/call-icon.svg"
import email from "../../assets/icons/email-icon.svg"
import address from "../../assets/icons/address-icon.svg"

import { ThemeContext } from "../../context";
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export default function Contact({ themeTextColor, themeBackground }) {
        const formRef = useRef()
        const [done,setDone] = useState(false)

        const theme = useContext(ThemeContext)
        const darkMode = theme.state.darkMode

        const handleSubmit = (e) => {
            e.preventDefault()
            
            emailjs.sendForm('service_4j0ksj8', 'template_6o5f1z7', formRef.current, 'CWsSkru2-hnTyFHeO')
            .then((result) => {
                console.log(result.text)
                setDone(true)
            }, (error) => {
                console.log(error.text)
            })
        }

    return (
        <div className="contact">
            <div className="contact-wrapper">
                <div className="contact-left" style={{backgroundColor: themeBackground}}>
                    <h1 className="contact-title" style={{ color: themeTextColor }}>Let's Connect!</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={call} alt="Phone" className="contact-icon" />
                            <span className="contact-info-text">O68 444 3922</span>
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="Email" className="contact-icon" />
                            <a href="" className="contact-link">jalesnotjaque@gmail.com</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={address} alt="Address" className="contact-icon" />
                            <div className="contact-info-item-text">
                                <p>12 DS Pienarr ST, Oranjisieg</p>
                                <p>Bloemfontein, 9300</p>
                            </div>
    
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>Have something to say?</b> Feel free to reach out. <br/> I'm always excited to collaborate and discuss new opportunities.
                    </p>
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name"  name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_" />
                        <textarea style={{backgroundColor: darkMode && "#333"}}  rows="5" placeholder="Message" name="message"></textarea>
                        <button type="submit" className="contact-btn">Send</button>
                        {done && <p className="contact-success">Your message has been sent! <br />Thank You...</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}
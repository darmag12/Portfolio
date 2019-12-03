import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <section id="contact" className="contact__container">
             <h3 className="contact-header">
                    Contact Me <span className="dots">....................<i className="fas fa-circle"></i></span><span className="num">05.</span>
                </h3>
                 <div className="contact-top"> 
                    <div className="top">
                        <div className="top-card">
                            <div className="top-num">01.</div>
                            <span className="top-icon"><i className="fas fa-map-marker-alt"></i></span>
                            <span className="top-subtext">Location</span>
                            <p className="top-text">Georgia, USA</p>
                        </div>
                    </div>

                    <div className="top">
                         <div className="top-card">
                            <div className="top-num">02.</div>
                            <span className="top-icon"><i className="fas fa-envelope"></i></span>
                            <span className="top-subtext">Email</span>
                            <p className="top-text">mageradaryl12@gmail.com</p>
                        </div>
                    </div>

                    <div className="top">
                         <div className="top-card">
                            <div className="top-num">03.</div>
                            <span className="top-icon"><i className="fas fa-phone-alt"></i></span>
                            <span className="top-subtext">Phone</span>
                            <p className="top-text">+1 470 778-7877</p>
                        </div>
                    </div>
                    </div>

                <div className="contact-bottom">
                <form name="contact" className="contact-form" method="post">
                    <input type="hidden" name="form-name" value="contact"/>
                    <input className="input--mod set" type="text" name="name" placeholder="Name" required/>
                    <input className="input--mod set" type="email" name="email" placeholder="Email" required/>
                    <input className="subject input--mod" type="text" name="subject" placeholder="Subject" required/>
                    <textarea className="message" type="text" name="message" placeholder="Your Message" required></textarea>
                    <input className="btn" type="submit" value="Send Message"/>
                </form>
                </div>
        </section>
    )
}

export default React.memo(Contact);
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* Contact section */}
            <div className="contact-container" >
                <div className="contact-details"> 
                    <div className="contact2"> 
                        <div className="contact-form reveal">
                            <form action="" method="POST">
                                <div className="field1">
                                    <p className="git">Get In <span> Touch</span></p>
                                    <input type="text" name="fullname" placeholder="Full name" required />
                                </div>
                                <div className="field2">
                                    <input type="email" name="email" placeholder="Email address" required />
                                </div>
                                <div className="field3">
                                    <input type="text" name="phone" placeholder="Phone number" required />
                                </div>
                                <div className="field4">
                                    <textarea name="message" id="Message"  placeholder="Your message"  rows="10"></textarea>
                                </div>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>       
                  {/* Location - Map */}
                <div className="location">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977296568!2d-79.54286378504297!3d43.71837095796846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1727365161903!5m2!1sen!2sca" 
                        width="600" 
                        height="450" 
                        style={{border: "0"}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        {/* Footer content */}
        <div className="footer-content">
            <div className="footer1">
                <ul>
                    <li>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                </ul>
            </div> 
            <div className="footer2">
                <ul>
                    <li className="oc"><p>OUR COMPANY</p></li>
                    <li><a href="/"><p>Home</p></a></li>
                    <li><a href=""><p>About Us</p></a></li>
                    <li><a href="#"><p>Frequently Asked Questions</p></a></li>
                    <li><a href=""><p>Policy & Privacy</p></a></li>
                </ul>
            </div>
            <div className="footer3">
                <ul>
                    <li className="hs"><p>QUICK LINKS</p></li>
                    <li><a href=""><p>Terms and Condition</p></a></li>
                    <li><a href=""><p>404</p></a></li>
                    <li><a href=""><p>Services</p></a></li>
                    <li><a href=""><p>Projects</p></a></li>
                </ul>
            </div>
            <div className="footer4">
                <ul>
                    <li className="cu"><p>CONTACT</p></li>
                    <li><a href="mailto:ejikeaugustus54@gmail.com"><p>ejikeaugustus54@gmail.com</p></a></li>
                    <li><a href="tel:+6475517461"><p>+1(647)-(551)-(7461)</p></a></li>
                    <li>
                       <p> Toronto, Ontario</p>
                    </li>
                    <li><p> Mon-Fri 8am-6pm</p></li>
                </ul>
            </div>
            {/* Copyright */}
            <div className="footer-bottom">
                <p className="copyright">Copyright &copy; 2024 | AugustusEjike . All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
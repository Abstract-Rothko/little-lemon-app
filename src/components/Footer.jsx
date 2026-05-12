import Logo from "../assets/logo2.png"
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <section className="footer-group">
                <section className="footer-grid">
                    <section className="footer-logo">
                        <img className="logo-f" src={ Logo } alt="Little Lemon Logo"/>
                    </section>
                    <section className="footer-links">
                        <Link className="footer-link" to="/">Home</Link>
                        <Link className="footer-link" to="/">About</Link>
                        <Link className="footer-link" to="/">Menu</Link>
                        <Link className="footer-link" to="/BookingPage">Reservations</Link>
                        <Link className="footer-link" to="/">Order Online</Link>
                    </section>
                    <section className="footer-socials">
                        <h4>Head Office</h4>
                        <p>Email: <a className="contact-links" href="mailto: example@email.com">example@email.com</a></p>
                        <p>Phone: <a className="contact-links" href="tel: +27123456789">+27 12-345-6789</a></p>
                        <p>Hours: 09:00-18:00(Monday - Saturday)</p>
                    </section>
                </section>
                <section className="footer-copyright">
                    <p id="copyright">&copy;2026 Little Lemon. All Rights Reserved.</p>
                </section>
            </section>
        </footer>
    );
};

export default Footer;
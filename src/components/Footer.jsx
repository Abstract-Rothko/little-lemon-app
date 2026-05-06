import Logo from "../assets/logo.svg"

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Little Lemon Logo"/>
            </div>
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Menu</a>
                <a href="/">Reservations</a>
                <a href="/">Order Online</a>
            </div>
            <div className="footer-socials">
                <h4>Head Office</h4>
                <p>Email: <a href="mailto: example@email.com">example@email.com</a></p>
                <p>Phone: <a href="tel: +27123456789">+27 12-345-6789</a></p>
                <p>Hours: 09:00 - 18:00 Monday - Saturday</p>
            </div>
            <div className="footer-copyright">
                <p>&copy;2026 Little Lemon. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
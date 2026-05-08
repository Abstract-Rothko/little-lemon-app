import icon from "../assets/logo.svg"
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={icon} alt="Little Lemon Logo"></img>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                <button className="login-btn">
                    <a href="/">Login</a>
                </button>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
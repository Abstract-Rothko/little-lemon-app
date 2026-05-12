import { Link } from "react-router-dom";
import icon from "../assets/logo.svg"
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <section className="navbar-left">
                <img src={icon} alt="Little Lemon Logo"></img>
            </section>
            <section className="navbar-right">
                <ul>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/">Menu</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/">Reservations</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/">Order Online</Link>
                    </li>
                <button className="login-btn">
                    <a href="/">Login</a>
                </button>
                </ul>
            </section>
        </nav>
    );
};

export default Nav;
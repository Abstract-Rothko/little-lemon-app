import { Link } from "react-router-dom";
import heroImage from "../assets/restaurant.jpg"
import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero-section">
            <section className="text-section">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served
                    with a modern twist.
                </p>
                <Link to="/BookingPage"><button className="reserve-btn">Reserve a Table</button></Link>
            </section>
            <section className="image-section">
                <img src={heroImage} alt="An image of the restaurant" width="600" height="450"/>
            </section>
        </section>
    );
};

export default Hero;
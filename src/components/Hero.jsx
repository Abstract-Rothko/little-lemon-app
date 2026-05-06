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
                <button>Reserve a Table</button>
            </section>
            <section className="image-section">
                <img src={heroImage} alt="An image of the restaurant" />
            </section>
        </section>
    );
};

export default Hero;
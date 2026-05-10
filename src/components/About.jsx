import chefDuo1 from "../assets/chefs1.jpg";
import chefDuo2 from "../assets/chefs2.jpg"
import "./About.css"

const About = () => {
    return (
        <section className="container">
            <section className="text">
                <h2>About Us</h2>
                <h3>Little Lemon Family</h3>
                <p>
                    Little lemon opened in 1995 by two italian brothers, Adrian and Mario.
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
                    The two brothers continue to oversee the Little Lemon restaurant, nearly
                    thirty years later.
                </p>
            </section>
            <section className="images">
                <img className="duo-img" src={chefDuo1} alt="Adrian and Mario photo" />
            </section>
        </section>
    )
}

export default About;
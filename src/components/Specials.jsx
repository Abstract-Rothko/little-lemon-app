import salad from "../assets/dish1 - greek_salad.jpg"
import bruschetta from "../assets/bruschetta2.jpg"
import desert from "../assets/dish3 - lemon_dessert.jpg"
import "./Specials.css"

const Specials = () => {
    return (
        <section className="specials-section">
            <section className="specials-container">
                <section className="specials-header">
                    <h2>Specials of Today</h2>
                    <button className="menu-btn">Menu</button>
                </section>
                <section className="card-flex">
                    <article className="card-container">
                        <section className="image-card">
                            <img src={salad} alt="A greek salad"/>
                        </section>
                        <h4>Greek Salad</h4>
                        <p>$12.00</p>
                        <p className="text-desc">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </article>
                    <article className="card-container">
                        <section className="image-card">
                            <img src={bruschetta} alt="A bruschetta dish"/>
                        </section>
                        <h4>Bruschetta</h4>
                        <p>$15.00</p>
                        <p className="text-desc">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    </article>
                    <article className="card-container">
                        <section className="image-card">
                            <img src={desert} alt="A lemon desert" />
                        </section>
                        <h4>Lemon Desert</h4>
                        <p>$25.00</p>
                        <p className="text-desc">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </article>
                </section>
            </section>
        </section>
    )
}

export default Specials;
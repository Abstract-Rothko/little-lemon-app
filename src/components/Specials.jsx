
const Specials = () => {
    return (
        <section className="specials-section">
            <section className="specials-container">
                <section className="specials-header">
                    <h2>Specials of Today</h2>
                    <button className="yellow-button">Menu</button>
                </section>
                <section className="card-flex">
                    <article className="card-container">
                        <section className="">
                            <img src={} alt="" />
                        </section>
                        <h4>Greek Salad</h4>
                        <p>$12.00</p>
                        <p>
                            The famous greek salad of crispy lettuce, peppers,
                            olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className="yellow-button">Order Online</button>
                    </article>
                    <article className="card-container">
                        <section>
                            <img src={} alt="" />
                        </section>
                        <h4>Bruschetta</h4>
                        <p>$15.00</p>
                        <p>
                            Our Bruschetta is made from grilled bread
                            that has been smeared with garlic and seasoned
                            with salt and olive oil.
                        </p>
                        <button className="yellow-button">Order Online</button>
                    </article>
                    <article className="card-container">
                        <section>
                            <img src={} alt="" />
                        </section>
                        <h4>Lemon Desert</h4>
                        <p>$25.00</p>
                        <p>
                            This comes straight from grandma's recipe book,
                            every last ingredient has been sourced
                            and is as authentic as can be imagined.
                        </p>
                        <button className="yellow-button">Order Online</button>
                    </article>
                </section>
            </section>
        </section>
    )
}

export default Specials;
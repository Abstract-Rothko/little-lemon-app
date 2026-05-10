import Image1 from "../assets/drake.avif"
import Image2 from "../assets/k-dot.jpg"
import Image3 from "../assets/cole.jpg"
import Image4 from "../assets/westside-gunn.webp"
import starPng from "../assets/black-star.png"
import "./Testimonials.css"


const Testimonials = () => {
    return (
        <section className="testimonials">
          <section className="testimonials-wrap">
            <h2 className="heading">What people say about us!</h2>
          </section>
          <section className="flex-items">
            <article className="flex-item">
              <section className="img-wrap">
                <img class="profile-img" src={Image1} alt="Customer" width="300" height="200"/>
              </section>
              <section className="content">
                <h4 className="name">Drake</h4>
                <span className="stars">
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                </span>
                <p className="text">
                  "You thought that little effort that you put in was enough girl how 'bout now?"
                </p>
              </section>
            </article>

            <article className="flex-item">
              <section className="img-wrap">
                <img class="profile-img" src={Image2} alt="Customer" width="300" height="200" />
              </section>
              <section className="content">
                <h4 className="name">Kendrick Lamar</h4>
                <span className="stars">
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                </span>
                <p className="text">
                  "I remember you was conflicted. Misusing your influence."
                </p>
              </section>
            </article>

            <article className="flex-item">
              <section className="img-wrap">
                <img class="profile-img" src={Image3} alt="Customer" width="300" height="200" />
              </section>
              <section className="content">
                <h4 className="name">J. Cole</h4>
                <span className="stars">
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                </span>
                <p className="text">
                  Appreciate the meal, G. My wife and I had great time!
                </p>
              </section>
            </article>

            <section className="flex-item">
              <section className="img-wrap">
                <img class="profile-img" src={Image4} alt="Customer" width="300" height="200" />
              </section>
              <section className="content">
                <h4 className="name">Westside Gunn</h4>
                <span className="stars">
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                  <img className="star" src={starPng} alt="star icon"/>
                </span>
                <p className="text">
                  Boom! Boom! Boom! Boom! Boom! Boom! Boom! Boom! Boom! Boom!
                </p>
              </section>
            </section>

          </section>
      </section>
    );
}

export default Testimonials;
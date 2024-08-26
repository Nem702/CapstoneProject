import Client1 from "../../../assets/client1.jpg"
import Client2 from "../../../assets/client2.jpg"
import Client3 from "../../../assets/client3.jpg"
import Client4 from "../../../assets/client4.jpg"
import "./Testimonials.css"

const Testimonials = () => {
    return(
        <div className="testimonialsWarapper">
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={Client1} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={Client2} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={Client3} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
            <div className="ratingCard">
                <h4>Rating</h4>
                <h4>Name</h4>
                <img className="TestimonialsImg" src={Client4} alt="mario and adrian"></img>
                <p>Review text</p>
            </div>
        </div>
    )
}

export default Testimonials;
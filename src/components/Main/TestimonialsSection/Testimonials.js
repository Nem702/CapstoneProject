import Client1 from "../../../assets/client1.jpg"
import Client2 from "../../../assets/client2.jpg"
import Client3 from "../../../assets/client3.jpg"
import Client4 from "../../../assets/client4.jpg"
import "./Testimonials.css"

const Testimonials = () => {
    return(
        <div className="testimonialsWarapper">
            <div className="ratingCard">
                <h4>Rating: 5/5 <i class="fa-solid fa-star"></i>'s</h4>
                <h4>Julia</h4>
                <img className="TestimonialsImg" src={Client1} alt="mario and adrian"></img>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi obcaecati laborum unde facilis voluptates id perspiciatis illo qui sequi necessitatibus dicta.</p>
            </div>
            <div className="ratingCard">
                <h4>Rating: 5/5 <i class="fa-solid fa-star"></i>'s</h4>
                <h4>Jimmy</h4>
                <img className="TestimonialsImg" src={Client2} alt="mario and adrian"></img>
                <p>Earum dolore, mollitia cum exercitationem ullam quam fugiat molestias doloribus modi nulla nobis. Ullam eaque, labore enim impedit animi libero officia aliquam!</p>
            </div>
            <div className="ratingCard">
                <h4>Rating: 5/5 <i class="fa-solid fa-star"></i>'s</h4>
                <h4>Maria</h4>
                <img className="TestimonialsImg" src={Client3} alt="mario and adrian"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et natus, nam iusto odio corrupti facilis impedit quod cupiditate quidem ipsum numquam provident repellat obcaecati necessitatibus harum tenetur? Culpa, quisquam?</p>
            </div>
            <div className="ratingCard">
                <h4>Rating: 5/5 <i class="fa-solid fa-star"></i>'s</h4>
                <h4>Bob Billy</h4>
                <img className="TestimonialsImg" src={Client4} alt="mario and adrian"></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Testimonials;
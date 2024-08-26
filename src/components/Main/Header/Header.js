import HeaderImg from "../../../assets/restaurant.jpg"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="headerLeft">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, corrupti voluptatibus voluptatum est quidem repellendus ducimus eligendi aliquid inventore sunt vitae praesentium aperiam dolor doloremque dolore excepturi temporibus, nobis totam.</p>
        <Link className="headerLink" to="/BookingPage">Reserve a table</Link>
      </div>
      <div className="headerRight">
        <img src={HeaderImg} alt="Restaurant"></img>
      </div>
    </header>
  )
};

export default Header;
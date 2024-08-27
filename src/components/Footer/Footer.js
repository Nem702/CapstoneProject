import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as Logo } from "../../assets/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="Logo">
        <Logo />
      </Link>
      <div className="dormantNavigation">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Menu</Link>
        <Link to="/BookingPage">Reservations</Link>
      </div>
      <div className="contact">
        <p>Address: 1234 Random address, City</p>
        <p>Phone: 123 - 345 - 5678</p>
        <p>E-mail: random@email.com</p>
      </div>
      <div className="socialMediaLinks">
        <Link to="/">
          <i className="fa-brands fa-square-facebook"></i> Facebook{" "}
        </Link>
        <Link to="/">
          <i className="fa-brands fa-instagram"></i> Instagram
        </Link>
        <Link to="/">
          <i className="fa-brands fa-yelp"></i> Yelp
        </Link>
        <Link to="/">
          <i className="fa-brands fa-react"></i> React
        </Link>
      </div>
    </footer>
  );
};


export default Footer;

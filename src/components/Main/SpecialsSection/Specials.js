import GreekSalad from "../../../assets/greek salad.jpg";
import LemonDessert from "../../../assets/lemon dessert.jpg";
import Bruschetta from "../../../assets/bruschetta.png"
import "../../Main/Main.css"
import { Link } from "react-router-dom";

const Specials = () => {
  return (
    <main>
      <div className="specialsContainer">
        <h2>Seasonal Specials</h2>
        {/* <Link className="link" to="/menu">
          Online Menu
        </Link> */}
      </div>
      <div className="cardsContainer">
        <div className="card">
          <img className="cardImg" src={GreekSalad} alt="greek salad"></img>
          <div className="titleNprice">
            <h4>Greek Salad</h4>
            <p className="price">$5.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <Link className="orderDelivery" to="/">
            Order Delivery
          </Link>
        </div>
        <div className="card">
          <img className="cardImg" src={Bruschetta} alt="Bruschetta"></img>
          <div className="titleNprice">
            <h4>Bruschetta</h4>
            <p className="price">$9.99</p>
          </div>
          <p>
            The famous Bruschetta of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <Link className="orderDelivery" to="/">
            Order Delivery
          </Link>
        </div>
        <div className="card">
        <img className="cardImg" src={LemonDessert} alt="lemon dessert"></img>
          <div className="titleNprice">
            <h4>Lemon Dessert</h4>
            <p className="price">$6.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <Link className="orderDelivery" to="/">
            Order Delivery
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Specials;
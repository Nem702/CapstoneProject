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
          Greek salad, also known as Horiatiki, is a vibrant and refreshing dish from Greek cuisine. The famous greek salad of crispy lettuce, peppers, olives and our
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
            The famous Bruschetta a delightful Italian appetizer made with grilled or toasted bread rubbed with garlic and topped with various ingredients. The classic version features Itallian herbs, ripe tomatoes, fresh basil, and garlic.{" "}
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
          A classic dessert made with double cream, golden caster sugar, and fresh lemons. The cream and sugar are heated together, and then lemon juice and zest are added, creating a creamy, citrusy treat that balances tanginess and sweetness.{" "}
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
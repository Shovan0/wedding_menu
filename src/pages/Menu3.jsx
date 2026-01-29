import { useState } from "react";
import "./Menu3.css";
import closeup from "../assets/closeup.jpeg";
import standing from "../assets/standing.jpeg";
import howrah from "../assets/howrah.jpeg";
// import "./Check.css"

const Menu3 = () => {
  const [activeCategory, setActiveCategory] = useState("stall");

  return (
    <div className="menu-category-page">

      <div>
        <img className="profile-photo" src={howrah} alt="Profile" />
      </div>

      <div className="wedding-title">
        <h1 className="first">Riya</h1>
        <h1 className="seecond">weds</h1>
        <h1 className="third">Sumanta</h1>
      </div>

      <h4 className="message">With love, laughter & happily ever after</h4>

      <div className="category-wrapper">
        <div
          className={`category-circle ${activeCategory === "stall" ? "active" : ""}`}
          onClick={() => setActiveCategory("stall")}
        >
          Stall
        </div>

        <div
          className={`category-circle ${activeCategory === "fruit" ? "active" : ""}`}
          onClick={() => setActiveCategory("fruit")}
        >
          Fruit Stall
        </div>

        <div
          className={`category-circle ${activeCategory === "main" ? "active" : ""}`}
          onClick={() => setActiveCategory("main")}
        >
          Main Course
        </div>
      </div>

      <div className="menu-list">
        {activeCategory === "stall" && (
          <ul className="menu-ul">
            <li>Tea/Coffee</li>
            <li>Fish Ball/Paneer Cheese Ball</li>
            <li>Phuchka/Papri Chat</li>
            <li>Chicken Lollipop</li>
            <li>Jilabi Rabri</li>
            <li>Reshmi Kabab</li>
            <li>Red Kabab</li>
            <li>Momo</li>
            <li>Salad</li>
            <li>Mixed Fruit Juice Perlour</li>
            <li>Soda Counter</li>
            <li>Ice Cream</li>4
            <li>Baby Corn</li>
          </ul>
        )}

        {activeCategory === "main" && (
          <ul className="menu-ul">
            <li>Pomfret Tondoor/Paneer Pasinda</li>
            <li>Green Chatni</li>
            <li>Salad</li>
            <li>Tandoor Naan</li>
            <li>Afgaan Chana Masala</li>
            <li>Vetki Paturi</li>
            <li>Sada Vaat</li>
            <li>Mutton Afgan Biriyani</li>
            <li>Mutton Kosha</li>
            <li>Chatni</li>
            <li>Papor</li>
            <li>KC Das Raj Vog</li>
            <li>Sondesh</li>
            <li>Hot Gulap Jamun</li>
          </ul>
        )}

        {activeCategory === "fruit" && (
          <ul className="menu-ul">
            <li>Apple</li>
            <li>CKB</li>
            <li>Grapes</li>
            <li>Papaya</li>
            <li>Sweet Lemon</li>
          </ul>
        )}
      </div>

    </div>
  );
};

export default Menu3;

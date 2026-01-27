import { useState } from "react";
import "./Menu2.css";
import profilePhoto from "../assets/profile-photo.jpeg";

const MenuCategory = () => {
  const [activeCategory, setActiveCategory] = useState("stall");

  return (
    <div className="menu-category-page">

      {/* Album Icon */}
      <div className="album-icon">
        <img src={profilePhoto} alt="Album" />
      </div>

      {/* Spacer after profile */}
      <div className="top-spacing"></div>

      {/* Wedding Heading */}
      <h1 className="wedding-title">Bride & Groom Weds</h1>
      <h4 className="message">With love, laughter & happily ever after</h4>

      {/* Category Circles */}
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

      {/* Menu List */}
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

export default MenuCategory;

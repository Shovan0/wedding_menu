import { useState, useRef, useEffect } from "react";
import PhotoSlider from "./PhotoSlider";
import howrah from "../assets/howrah.jpeg";
import closeup from "../assets/closeup.jpeg";
import standing from "../assets/standing.jpeg";
import "./Check.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("stall");
  const [lang, setLang] = useState("bn");

  /* CATEGORY SWIPE LOGIC */
  const categories = ["stall", "main", "fruit"];
  const swipeStartX = useRef(0);

  const handleCategoryTouchStart = (e) => {
    swipeStartX.current = e.touches[0].clientX;
  };

  const handleCategoryTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - swipeStartX.current;

    if (Math.abs(diff) < 60) return;

    const currentIndex = categories.indexOf(activeCategory);

    if (diff < 0 && currentIndex < categories.length - 1) {
      setActiveCategory(categories[currentIndex + 1]);
    }

    if (diff > 0 && currentIndex > 0) {
      setActiveCategory(categories[currentIndex - 1]);
    }
  };

  const weddingText = {
    en: {
      name: ["Riya", "weds", "Sumanta"],
      message: "With love, laughter & happily ever after",
      counter: ["Stall", "Main Course", "Fruit Stall"],
      stall: ["Tea, Coffee", "Phuchka, Papri Chat", "Fish Ball, Paneer Cheese Ball", "Chicken Lollipop", "Jilabi Rabri", "Reshmi Kabab", "Red Kabab", "Momo", "Salad", "Mixed Fruit Juice Perlour", "Soda Counter", "Ice Cream", "Baby Corn", "Makha Sondesh", "Hot Gulap Jamun", "Paan"],
      main: ["Pomfret Tandoor/Paneer Pasinda", "Green Chatni", "Salad", "Tandoor Naan", "Afghan Chana Masala/Keema Dal Fry", "Vetki Paturi", "Plain Rice", "Mutton Afghani Biriyani  (Kolkata Style)", "Mutton Kosha", "Chatni", "Papad", "KC Das Raj Vog"],
      fruit: ["Apple", "CKB", "Grapes", "Papaya", "Sweet Lemon"]
    },
    bn: {
      name: ["রিয়া ও সুমন্ত", "এর", "শুভ পরিণয়"],
      message: "ভালোবাসার এক নতুন অধ্যায়, আজ থেকে পথ চলা একসাথে।",
      counter: ["স্টল", "মেইন কোর্স", "ফ্রুট স্টল"],
      stall: ["চা/কফি", "ফিশ বল/পনির চীজ বল", "ফুচকা/পাপড়ি চাট", "চিকেন ললিপপ", "জিলিপি রাবড়ি", "রেশমি কাবাব", "রেড কাবাব", "মোমো", "স্যালাড", "মিক্সড ফ্রুট জুস পার্লার", "সোডা কাউন্টার-পার্লার", "আইসক্রিম-পার্লার", "বেবি কর্ন", "মাখা সন্দেশ", "গোলাপ জামন", "পান"],
      main: ["পমফ্রেট তন্দুর/পনির পাসিন্দা", "গ্রিন চাটনি", "স্যালাড", "তন্দুরি নান", "আফগান চানা মসলা", "ভেটকি পাতুরি", "সাদা ভাত", "মটন আফগান বিরিয়ানি", "মটন কষা", "চাটনি", "পাঁপড়", "কে-সি-দাসের রাজ ভোগ"],
      fruit: ["আপেল", "সিকেবি", "আঙ্গুর", "পেঁপে", "মৌসুমি লেবু"]
    }
  };

  const slides = [howrah, standing, closeup];

  return (
    <div className={`menu-category-page ${lang === "bn" ? "lang-bn" : "lang-en"}`}>

      <PhotoSlider />

      <div className="wedding-title">
        <h1 className="first">{weddingText[lang].name[0]}</h1>
        <h1 className="second">{weddingText[lang].name[1]}</h1>
        <h1 className="third">{weddingText[lang].name[2]}</h1>
      </div>

      <h4 className="message">{weddingText[lang].message}</h4>

      {/* LANGUAGE BUTTONS (NO SWIPE) */}
      <div className="lang-toggle">
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
          EN
        </button>
        <button className={lang === "bn" ? "active" : ""} onClick={() => setLang("bn")}>
          বাংলা
        </button>
      </div>

      {/* SWIPE AREA FOR FOOD CATEGORIES */}
      <div
        className="menu-swipe-area"
        onTouchStart={handleCategoryTouchStart}
        onTouchEnd={handleCategoryTouchEnd}
      >
        <div className="menu-tabs sticky-tabs">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`menu-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {weddingText[lang].counter[index]}
            </button>
          ))}
        </div>

        <div className="menu-list">
          <ul className="menu-ul">
            {weddingText[lang][activeCategory].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </div>
  );
};

export default Menu;
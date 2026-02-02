import { useState, useRef, useEffect } from "react";
import PhotoSlider from "./PhotoSlider";
import howrah from "../assets/howrah.jpeg";
import closeup from "../assets/closeup.jpeg";
import standing from "../assets/standing.jpeg";
import "./Check.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("main");
  const [lang, setLang] = useState("bn");

  /* CATEGORY SWIPE LOGIC */
  const categories = ["main", "stall"];
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
      counter: ["Main Course", "Stall"],
      main: ["Pomfret Tandoor/Paneer Pasinda", "Green Chutney", "Salad", "Tandoor Naan", "Afghan Chana Masala/Keema Dal Fry", "Vetki Paturi", "Plain Rice", "Mutton Afghani Biriyani", "Mutton Kosha/Chicken Kosha", "Chutney", "Papad", "Roshmadhuri", "Makha Sondesh (Stall)", "Gulab Jamun (Stall)"],
      stall: ["Tea, Coffee", "Fish Ball, Cheese Ball",  "Momo", "Baby Corn", "Chicken Lollipop", "Reshmi Kabab", "Red Kabab", "Phuchka, Papri Chat", "Jilabi Rabri", "Mixed Salad", "Mixed Fruit",  "Fruit Juice Parlour", "Soda Counter Parlour", "Ice Cream Perlour", "Banarasi Paan"],      
    },
    bn: {
      name: ["রিয়া ও সুমন্ত", "এর", "শুভ পরিণয়"],
      message: "ভালোবাসার এক নতুন অধ্যায়, আজ থেকে পথ চলা একসাথে।",
      counter: ["মেইন কোর্স", "স্টল"],
      main: ["পমফ্রেট তন্দুর / পনির পাসিন্দা", "গ্রিন চাটনি", "স্যালাড", "তন্দুর নান", "আফগান চানা মসলা / কিমা ডাল ফ্রাই", "ভেটকি পাতুরি", "সাদা ভাত", "মটন আফগান বিরিয়ানি", "মটন কষা / চিকেন কষা", "চাটনি", "পাঁপড়", "রশমাধুরী", "মাখা সন্দেশ (স্টল)", "গোলাপ জামুন (স্টল)"],
      stall: ["চা, কফি", "ফিশ বল, চীজ বল",  "মোমো", "বেবি কর্ন", "চিকেন ললিপপ", "রেশমি কাবাব", "রেড কাবাব", "ফুচকা, পাপড়ি চাট", "জিলিপি রাবড়ি", "মিক্সড স্যালাড", "মিক্সড ফ্রুট",  "ফ্রুট জুস পার্লার", "সোডা কাউন্টার পার্লার", "আইসক্রিম পার্লার", "বেনারসী পান"],
      // fruit: ["আপেল", "সবুজ আপেল", "আনারস", "পেঁপে", "কমলালেবু", "কালো আঙ্গুর", "লাল আঙ্গুর", "পিয়ারা", "ড্রাগন ফল", "কিউই ফল", "স্ট্রবেরি", "রাম ভুটান", "তরমুজ", "ডালিম", "আনজির", "খেঁজুর"]

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

      <div className="ornamental-divider">
        <svg viewBox="0 0 400 40" preserveAspectRatio="xMidYMid meet">
          {/* <!-- Left wave (more curvy) --> */}
          <path
            d="M20 20 C 90 0, 110 40, 180 20"
            fill="none"
            stroke="#7a1f2b"
            strokeWidth="1.6"
          />

          {/* <!-- Right wave (more curvy) --> */}
          <path
            d="M220 20 C 290 0, 310 40, 380 20"
            fill="none"
            stroke="#7a1f2b"
            strokeWidth="1.6"
          />

          {/* <!-- Center circle --> */}
          <circle
            cx="200"
            cy="20"
            r="4"
            fill="#7a1f2b"
          />
        </svg>
      </div>




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
        <div className={`menu-tabs ${lang === "bn" ? "lang-bn" : "lang-en"}`}>
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
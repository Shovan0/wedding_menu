import { useState, useRef } from "react";
import howrah from "../assets/howrah.jpeg";
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
      message: "With love, laughter & happily ever after",
      counter: ["Stall", "Main Course", "Fruit Stall"],
      stall: ["Tea/Coffee", "Fish Ball/Paneer Cheese Ball", "Phuchka/Papri Chat", "Chicken Lollipop", "Jilabi Rabri", "Reshmi Kabab", "Red Kabab", "Momo", "Salad", "Mixed Fruit Juice Perlour", "Soda Counter", "Ice Cream", "Baby Corn"],
      main: ["Pomfret Tandoor/Paneer Pasinda", "Green Chatni", "Salad", "Tandoor Naan", "Afgaan Chana Masala", "Vetki Paturi", "Sada Vaat", "Mutton Afgan Biriyani", "Mutton Kosha", "Chatni", "Papor", "KC Das Raj Vog", "Sondesh", "Hot Gulap Jamun"],
      fruit: ["Apple", "CKB", "Grapes", "Papaya", "Sweet Lemon"]
    },
    bn: {
      message: "আমার মতে তোর মতন কেউ নেই.",
      counter: ["স্টল", "মেইন কোর্স", "ফ্রুট স্টল"],
      stall: ["চা/কফি", "ফিশ বল/পনির চিজ বল", "ফুচকা/পাপড়ি চাট", "চিকেন ললিপপ", "জিলাবি রাবড়ি", "রেশমি কাবাব", "রেড কাবাব", "মোমো", "সালাদ", "মিক্সড ফ্রুট জুস পার্লার", "সোডা কাউন্টার", "আইসক্রিম", "বেবি কর্ন"],
      main: ["পমফ্রেট তন্দুর/পনির পাসিন্দা", "সবুজ চাটনি", "সালাদ", "তন্দুর নান", "আফগান ছানা মসলা", "বেতকি পাতুরি", "সাদা ভাত", "মাটন আফগান বিরিয়ানি", "মাটন কোশা", "চাটনি", "পাপড়", "কে সি দাস রাজ ভোগ", "সন্দেশ", "হট গুলাপ জামুন"],
      fruit: ["আপেল", "সিকেবি", "আঙ্গুর", "পেঁপে", "মিষ্টি লেবু"]
    }
  };

  return (
    <div className={`menu-category-page ${lang === "bn" ? "lang-bn" : "lang-en"}`}>

      <img className="profile-photo" src={howrah} alt="Profile" />

      <div className="wedding-title">
        <h1 className="first">Riya</h1>
        <h1 className="second">weds</h1>
        <h1 className="third">Sumanta</h1>
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
        <div className="menu-tabs">
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
import "./Menu2.css";
import profilePhoto from "../assets/profile-photo.jpeg";
import wave from "../assets/wave-like-style.jpeg";

const Menu2 = () => {
  return (
    <div className="menu-page">

      {/* Album Icon */}
      <div className="album-icon">
        <img
          src={profilePhoto}
          alt="Album"
          title="Go to Album"
        />
      </div>

      {/* Wedding Title */}
      <h1 className="wedding-title">Neha & Nitya Wedding</h1>

      <div className="menu-layout">

        {/* Left Menu Content */}
        <div className="menu-content">

          <section className="menu-section">
            <h2>Starters</h2>
            <ul>
              <li>Paneer Tikka</li>
              <li>Veg Spring Roll</li>
              <li>Hara Bhara Kebab</li>
              <li>Cheese Balls</li>
              <li>Veg Manchurian</li>
            </ul>
          </section>

          <section className="menu-section">
            <h2>Main Course</h2>
            <ul>
              <li>Butter Paneer</li>
              <li>Dal Makhani</li>
              <li>Veg Biryani</li>
              <li>Shahi Paneer</li>
              <li>Mix Veg Curry</li>
              <li>Jeera Rice</li>
              <li>Tandoori Roti</li>
              <li>Butter Naan</li>
              <li>Veg Korma</li>
              <li>Malai Kofta</li>
            </ul>
          </section>

          <section className="menu-section">
            <h2>Desserts</h2>
            <ul>
              <li>Gulab Jamun</li>
              <li>Rasgulla</li>
              <li>Ice Cream</li>
              <li>Brownie</li>
              <li>Rabri</li>
            </ul>
          </section>

        </div>

        {/* Right Wave Image */}
        <div className="wave-image">
          <img
            src={wave}
            alt="Wedding Food"
          />
        </div>

      </div>
    </div>
  );
};

export default Menu2;

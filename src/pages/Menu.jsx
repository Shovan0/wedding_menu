import "./Menu.css";

const MenuPage = () => {
  return (
    <div className="menu-page">

      {/* Top Right Album Button */}
      <div className="album-icon">
        <img
          src="https://via.placeholder.com/60"
          alt="Album"
          title="Go to Album"
        />
      </div>

      {/* Wedding Title */}
      <h1 className="wedding-title">
        Neha & Nitya Wedding
      </h1>

      {/* Menu Section */}
      <div className="menu-container">

        {/* Starters */}
        <div className="menu-block">
          <div className="menu-text">
            <h2>Starters</h2>
            <ul>
              <li>Paneer Tikka</li>
              <li>Veg Spring Roll</li>
              <li>Hara Bhara Kebab</li>
              <li>Cheese Balls</li>
              <li>Veg Manchurian</li>
            </ul>
          </div>

          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Starter"
              alt="Starter"
            />
          </div>
        </div>

        {/* Main Course */}
        <div className="menu-block reverse">
          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Main+Course"
              alt="Main Course"
            />
          </div>

          <div className="menu-text">
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
          </div>
        </div>

        {/* Desserts */}
        <div className="menu-block">
          <div className="menu-text">
            <h2>Desserts</h2>
            <ul>
              <li>Gulab Jamun</li>
              <li>Rasgulla</li>
              <li>Ice Cream</li>
              <li>Brownie</li>
              <li>Rabri</li>
            </ul>
          </div>

          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Dessert"
              alt="Dessert"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuPage;

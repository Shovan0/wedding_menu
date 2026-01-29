import "./Menu.css";
// import profilePhoto from "../assets/profile-photo.jpeg";

const MenuPage = () => {
  return (
    <div className="menu-page">

      {/* Top Right Album Button */}
      <div className="album-heeading">
        <div className="album-icon">
          <img
            src={profilePhoto}
            alt="Album"
            title="Go to Album"
          />
        </div>

        {/* Wedding Title */}
        <h1 className="wedding-title">
          Bride Weds Groom
        </h1>
      </div>


      {/* Menu Section */}
      <div className="menu-container">

        {/* Stall */}
        <div className="menu-block">
          <div className="menu-text">
            <h2>Stall</h2>
            <ul>
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
          </div>

          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Stall"
              alt="Stall"
            />
          </div>
        </div>

        {/* Fruit Stall */}
        <div className="menu-block reverse">
          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Fruit+Stall"
              alt="Fruit Stall"
            />
          </div>

          <div className="menu-text">
            <h2>Main Course</h2>
            <ul>
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
          </div>
        </div>

        {/* Main Course */}
        <div className="menu-block">
          <div className="menu-text">
            <h2>Fruit Stall</h2>
            <ul>
              <li>Apple</li>
              <li>CKB</li>
              <li>Grapes</li>
              <li>Papaya</li>
              <li>Sweet Lemon</li>
            </ul>
          </div>

          <div className="menu-image">
            <img
              src="https://via.placeholder.com/350x220?text=Main+Course"
              alt="Main Course"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuPage;

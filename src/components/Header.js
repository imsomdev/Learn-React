import { useState } from "react";
import { Link } from "react-router-dom";
/**
 * This is a Functional Component
 */
const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Y3H4BWeev-dzDtyaLTPdBMQ3_5ZbUXHvW1Bscmr_w&s"
  ></img>
);
// const isLoggedIn = () => {
//   return false;
// };

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;

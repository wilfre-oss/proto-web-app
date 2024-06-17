import { Link } from "react-router-dom";
import Searchbar from "./ui/Searchbar.jsx";
import cart from "../assets/cart.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        FAKE-MART
      </Link>
      <Searchbar />
      <ul>
        <li>
          <Link to="/">
            <img src={cart} alt="Cart" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={cart} alt="Cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

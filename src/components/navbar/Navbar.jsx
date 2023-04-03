import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../../assest/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-brand__link" to="/">
        <div className="nav-brand">
          <h1>D</h1>
          <h2>roger</h2>
          <h1>Z</h1>
        </div>
      </Link>
      <ul className="nav-menu">
        <NavLink
          className={(isActive) => (isActive ? "is_active" : "nav-menu__li")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(isActive) => (isActive ? "is_active" : "nav-menu__li")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(isActive, isPending) =>
            isActive ? "is_active" : "isPending"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <div className="nav-panel">
        <li className="nav-panel__li">
          <CartWidget />
        </li>
      </div>
    </div>
  );
};

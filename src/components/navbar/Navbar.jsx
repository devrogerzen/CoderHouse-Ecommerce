import { CartWidget } from "../CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <h1>D</h1>
        <h2>roger</h2>
        <h1>Z</h1>
      </div>
      <ul className="nav-menu">
        <li className="nav-menu__li">
          <a href="/#">Home</a>
        </li>
        <li className="nav-menu__li">
          <a href="/#">About</a>
        </li>
        <li className="nav-menu__li">
          <a href="/#">Contact</a>
        </li>
      </ul>
      <div className="nav-panel">
        <li className="nav-panel__li">
          <CartWidget />
        </li>
      </div>
    </div>
  );
};

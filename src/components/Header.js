import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header nav-wrapper">
        <h3 className="header-title">
          <Link to="/" className="header-link">React Shop / SPA</Link>
        </h3>
        <ul className="header-list right hide-on-med-and-down">
          <li className="header-item">
            <Link to="/about" className="header-item-link btn">About</Link>
          </li>
          <li className="header-item">
            <Link to="/contact" className="header-item-link btn">Contact</Link>
          </li>
        </ul>
    </div>
  );
}

import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/">
          <img src={logo} alt="Kasa" className="layout__logo" />
        </Link>
        <nav className="layout__nav">
          <Link to="/" className="layout__nav-link">
            Accueil
          </Link>
          <Link to="/a-propos" className="layout__nav-link">
            A propos
          </Link>
        </nav>
      </header>

      <main className="layout__main">{children}</main>

      <footer className="layout__footer">
        <img src={logo} alt="Kasa" className="layout__footer-logo" />
        <p className="layout__footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;

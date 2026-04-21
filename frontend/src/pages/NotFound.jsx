import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">
        Oups! La page que<br className="mobile-break"/> vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="not-found__link">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export default NotFound;

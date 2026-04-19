import { Link } from "react-router-dom";
import logements from "../data/logements";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home__banner">
        <p className="home__banner-text">Chez vous, partout et ailleurs</p>
      </div>

      <div className="home__grid">
        {logements.map((logement) => (
          <Link
            key={logement.id}
            to={`/logement/${logement.id}`}
            className="home__card"
          >
            <div className="home__card-overlay">
              <p className="home__card-title">{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;

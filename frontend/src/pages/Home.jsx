import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import "./Home.css";
import bannerHome from '../assets/source1.jpg';

function Home() {
const [logements, setLogements] = useState([]);

useEffect(() => {
fetch("http://localhost:8080/api/properties")
.then((response) => response.json())
.then((data) => setLogements(data));
}, []);

return (
<section className="home">
<Banner text="Chez vous, partout et ailleurs" image={bannerHome} opacity={0.6} />
<div className="home__grid">
{logements.map((logement) => (
<Link key={logement.id} to={`/logement/${logement.id}`}>
<Card title={logement.title} cover={logement.cover} />
</Link>
))}
</div>
</section>
);
}

export default Home;
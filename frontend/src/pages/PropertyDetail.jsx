import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "./PropertyDetail.css";
import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";

function PropertyDetail() {
const { id } = useParams();
const [logement, setLogement] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch(`http://localhost:8080/api/properties/${id}`)
.then((response) => response.json())
.then((data) => {
setLogement(data);
setLoading(false);
});
}, [id]);

if (loading) return <p>Chargement...</p>;
if (!logement) return <NotFound />;

  return (
    <article className="property">
      <Slideshow images={logement.pictures} />

      <div className="property__header">
        <div className="property__info">
          <h1 className="property__title">{logement.title}</h1>
          <p className="property__location">{logement.location}</p>
          <ul className="property__tags">
            {logement.tags.map((tag) => (
              <li key={tag} className="property__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="property__host">
          <div className="property__host-info">
            <span className="property__host-name">{logement.host.name}</span>
            <div className="property__host-avatar" aria-label="Avatar hôte" />
          </div>
          
            <div className="property__rating" aria-label={`Note : ${logement.rating} sur 5`}>
{[1, 2, 3, 4, 5].map((star) => (
<img
key={star}
src={star <= Number(logement.rating) ? "/src/assets/étoile.svg" : "/src/assets/étoile-vide.svg"}
alt=""
width="32"
height="32"
/>
))}
</div>
        </div>
      </div>

      <div className="property__collapses">
<Collapse title="Description" content={logement.description} />
<Collapse title="Équipements" content={Array.isArray(logement.equipments) ? logement.equipments.map((item, i) => <span key={i}>{item}</span>) : logement.equipments} />
    </div>
    </article>
  );
}

export default PropertyDetail;

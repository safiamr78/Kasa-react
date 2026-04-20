import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "./PropertyDetail.css";

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
      <div className="property__image-placeholder" aria-label="Image du logement" />

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
          <div
            className="property__rating"
            aria-label={`Note : ${logement.rating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`property__star${
                  star <= Number(logement.rating) ? " property__star--filled" : ""
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="property__description">
        <h2 className="property__section-title">Description</h2>
        <p className="property__text">{logement.description}</p>
      </div>
    </article>
  );
}

export default PropertyDetail;

import './Card.css';

const Card = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card__image" />
            <div className="card__overlay">
                <p className="card__title">{title}</p>
            </div>
        </div>
    );
};

export default Card;
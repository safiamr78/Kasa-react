import './Banner.css';

const Banner = ({ text, image, opacity = 0.5 }) => {
    return (
        <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${image})` }}>
            {text && <p className="banner__text">{text}</p>}
        </div>
    );
};

export default Banner;
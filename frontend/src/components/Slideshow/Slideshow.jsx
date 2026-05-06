import { useState } from 'react';
import './Slideshow.css';

function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const showControls = images.length > 1;

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slideshow__image" />
            {showControls && (
                <>
                    <button className="slideshow__btn slideshow__btn--prev" onClick={handlePrev}>
                        <img src="/src/assets/arrow.svg" alt="précédent" />
                    </button>
                    <button className="slideshow__btn slideshow__btn--next" onClick={handleNext}>
                        <img src="/src/assets/arrow.svg" alt="suivant" />
                    </button>
                    <div className="slideshow__counter">{currentIndex + 1} / {images.length}</div>
                </>
            )}
        </div>
    );
}

export default Slideshow;
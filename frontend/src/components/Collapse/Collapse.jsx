import { useState } from 'react';
import './Collapse.css';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse__header">
                <h3>{title}</h3>
                <span className={`collapse__arrow ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src="/src/assets/arrow.svg" alt="arrow" width="20" height="20" />
                </span>
            </div>
            {isOpen && (
                <div className="collapse__content">
                    <div className="collapse__content-inner">
                        {content}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Collapse;
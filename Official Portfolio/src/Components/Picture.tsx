import React, { useState } from 'react';
import profilePic from '../assets/EzadParis.jpg';
import backImage from '../assets/EzadCordoba.jpg';
import './Picture.css';

const Picture = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="body">
             <div 
                className={`profile-pic-container ${isFlipped ? 'flipped' : ''}`} 
                onClick={handleToggle}
            >
                <div className='pic-card'>
                    <div className='front'>
                        <img src={profilePic} alt="Profile Picture" />
                    </div>
                    <div className='back'>
                        <img src={backImage} alt="Back Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Picture;

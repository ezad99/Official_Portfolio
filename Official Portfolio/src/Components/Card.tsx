import React from 'react';
import './Card.css';

interface CardProps {
    imageSrc: string;
    title: string;
    text: string;
    linkTo: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text, linkTo }) => {
    return (
        <a href={linkTo} className="card">
            <img className="card-image" src={imageSrc} alt="profile picture"></img>
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{text}</p>
        </a>
    );
}

export default Card;
import React from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
    imageSrc: string;
    company: string;
    role: string;
    date: string;
    linkTo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ imageSrc, linkTo, company, role, date }) => {
    return (
        <>
            <div className="xp-card">
                <img className="xp-image" src={imageSrc} alt="profile picture"></img>
                <div className='xp-details'>
                    <a href={linkTo} className='xp-company'>{company}</a>
                    <h3 className='xp-title'>{role}</h3>
                    <h3 className='xp-date'>{date}</h3>
                </div>
            </div>
            <hr className='line'></hr>
        </>
    );
}

export default ExperienceCard;
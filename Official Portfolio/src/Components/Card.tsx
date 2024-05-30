import './Card.css'

interface CardProps {
    imageSrc: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
    return (
        <div className="card">
            <img className="card-image" src={imageSrc} alt="profile picture"></img>
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{text}</p>
        </div>
    )
}

export default Card
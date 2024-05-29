import pokeball from '../assets/pokeball.png'
import './Card.css'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className='card-title'>Portfolio Website</h2>
            <p className='card-text'>First Website made using React + Typescript</p>
        </div>
    )
}

export default Card
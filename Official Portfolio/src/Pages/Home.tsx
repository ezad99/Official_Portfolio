import React from 'react';
import Card from '../Components/Card';
import Picture from "../Components/Picture"
import pokeball from '../assets/pokeball.png'
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Picture />
            <header className="hero-section">
                <h1>Hi I'm Ezad</h1>
                <h2>Software Engineer @ University of Glasgow</h2>
                <p>Currently an undergraduate at the University of Glasgow. I will be interning at JP Morgan in Glasgow for the Summer.</p>
            </header>
            <hr className="line"></hr>
            <section className="projects-preview">
                <h2>Highlighted Projects</h2>
                <div className="project-cards">
                    {/* Add your project cards here */}
                    <Card
                        imageSrc={pokeball}
                        title={"Pokemon Game"}
                        text={"I wanna be the very best"}
                        linkTo='/about'
                    />
                </div>
            </section>
            <hr className="line"></hr>
            <section className="contact-section">
                <h2>Contact Me</h2>
                <p>If you would like to get in touch, feel free to <a href="/contact">contact me</a>.</p>
            </section>
        </div>
    );
};

export default Home;

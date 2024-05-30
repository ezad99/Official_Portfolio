import React from 'react';
import Card from '../Components/Card';
import pokeball from '../assets/pokeball.png'
// import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p>I am [Your Name], a [Your Profession]</p>
            </header>
            <section className="intro-section">
                <h2>About Me</h2>
                <p>
                    I am a passionate [Your Profession] specializing in [Your Specialization].
                    With [Your Experience] years of experience, I have worked on various
                    projects involving [mention some key areas or projects].
                </p>
            </section>
            <section className="projects-preview">
                <h2>Highlighted Projects</h2>
                <div className="project-cards">
                    {/* Add your project cards here */}
                    <Card
                        imageSrc={pokeball}
                        title={"Pokemon Game"}
                        text={"I wanna be the very best"}
                    />
                </div>
            </section>
            <section className="contact-section">
                <h2>Contact Me</h2>
                <p>If you would like to get in touch, feel free to <a href="/contact">contact me</a>.</p>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import Card from '../Components/Card';
import Picture from "../Components/Picture"
import './Home.css';
import projects
    from '../Data/Projects';
const Home: React.FC = () => {

    const highlightedProjects = projects.filter(project => project.highlight)

    return (
        <div className="home-container">
            <Picture />
            <header className="hero-section">
                <h1>Hi I'm Ezad</h1>
                <h2>Software Engineer @ University of Glasgow</h2>
                <p>Currently an undergraduate at the University of Glasgow. Former Software Analyst Intern @ JP Morgan.</p>
            </header>
            <hr className="line"></hr>
            <section className="projects-preview">
                <h2>Highlighted Projects</h2>
                <div className="project-cards">
                    {highlightedProjects.map(project => (
                        <Card
                            imageSrc={project.imageSrc}
                            title={project.name}
                            text={project.description}
                            linkTo={`/project/${project.id}`}
                        />
                    ))}
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

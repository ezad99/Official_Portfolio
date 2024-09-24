import ExperienceCard from "../Components/ExperienceCard"
import JPMorgan from "../assets/JPMorgan.jpg"
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About</h1>
            <hr className='line' />
            <p>I'm a Final Year Malaysian student who is currently taking a Bachelors (Honours) in Software
                Engineering at the University of Glasgow.
            </p>
            <p>I have interned at JP Morgan, one of the biggest and most respected banks in the world where I gained practical experience as a Software Engineer working in the fintech space by delivering business results and making an impact during my team at the company</p>
            <p>I have also worked numerous positions at my University, with the most recent being a demonstrator entrusted with assisting first year students in their studies and helping them build their knowledge base</p>
            <br />
            <h1>Experience</h1>
            <hr className='line' />
            <ExperienceCard
                imageSrc={JPMorgan}
                company={'JP Morgan'}
                role={'Software Analyst Intern'}
                date={'June 2024 -> August 2024'}
                linkTo={'https://www.jpmorgan.com/global'}
            />
        </div>
    )
}

export default About;
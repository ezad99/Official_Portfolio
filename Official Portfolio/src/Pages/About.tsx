import ExperienceCard from "../Components/ExperienceCard"
import JPMorgan from "../assets/JPMorgan.jpg"
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About</h1>
            <hr className='line' />
            <p>I'm a 3rd Year Malaysian student who is currently taking a Bachelors (Honours) in Software
                Engineering at the University of Glasgow.
            </p>
            <p>During my studies I have participated in numerous hackathons and an insight week program at JP Morgan where I learned the ins and outs of FinTech from one of the leading banks in the World</p>
            <p>I will be taking a 2 month internship at JP Morgan this summer where I will be getting practical experience in developing software for a Fortune 500 company</p>
            <br />
            <h1>Experience</h1>
            <hr className='line' />
            <ExperienceCard 
                imageSrc={JPMorgan} 
                company={'JP Morgan'} 
                role={'Software Analyst Intern'} 
                date={'June 2024 -> Today'} 
                linkTo={'https://www.jpmorgan.com/global'}                
            />
        </div>
    )
}

export default About;
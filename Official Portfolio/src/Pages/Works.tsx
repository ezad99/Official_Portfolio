import './Work.css'
import Card from '../Components/Card'
import projects from '../Data/Projects'

const Works = () => {
    return (
        <>
            <div className='work-container'>
                <h1>Work</h1>
                <hr className='line' />
                <p> Here are all my projects that I have worked on, ranging from professional and personal endeavours. Some projects are not shown due to confidentiality reasons.</p>
                <br />
                <h1>Experience</h1>
                <hr className='line' />
                <div className="project-list">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.name}
                            text={project.description}
                            linkTo={`/project/${project.id}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Works;
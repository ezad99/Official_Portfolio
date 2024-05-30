import React from 'react'
import './Work.css'
import Card from '../Components/Card'

const projects = [
    { id: 1, name: 'Project One', description: 'Detailed description of Project One', imageSrc: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Project Two', description: 'Detailed description of Project Two', imageSrc: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Project Three', description: 'Detailed description of Project Three', imageSrc: 'https://picsum.photos/200/200?random=3' },
]

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
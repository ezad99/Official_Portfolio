import React from 'react';
import { useParams } from 'react-router-dom';

// Define the Project interface
interface Project {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
}

// Sample project data
const projects: Project[] = [
    { id: 1, name: 'Project One', description: 'Detailed description of Project One', imageSrc: 'https://picsum.photos/200/300?random=1' },
    { id: 2, name: 'Project Two', description: 'Detailed description of Project Two', imageSrc: 'https://picsum.photos/200/300?random=2' },
    { id: 3, name: 'Project Three', description: 'Detailed description of Project Three', imageSrc: 'https://picsum.photos/200/300?random=3' },
];

const ProjectDetail: React.FC = () => {
    // useParams returns an object whose keys are strings
    const { id } = useParams<{ id: string }>();

    // Find the project with the matching id
    const project = projects.find(project => project.id === parseInt(id, 10));

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="project-detail">
            <h1>{project.name}</h1>
            <img src={project.imageSrc} alt={project.name} />
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectDetail;

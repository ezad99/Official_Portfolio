import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../Data/Projects';

const ProjectDetail: React.FC = () => {
    // useParams returns an object whose keys are strings
    const { id } = useParams<{ id: string }>();

    // Find the project with the matching id
    const project = projects.find(project => project.id === parseInt(id as string, 10));

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

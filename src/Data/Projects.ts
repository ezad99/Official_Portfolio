interface Project {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    highlight?: boolean;
}

const projects: Project[] = [
    { id: 1, name: 'Project One', description: 'Detailed description of Project One', imageSrc: 'https://picsum.photos/200/200?random=1', highlight:true },
    { id: 2, name: 'Project Two', description: 'Detailed description of Project Two', imageSrc: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Project Three', description: 'Detailed description of Project Three', imageSrc: 'https://picsum.photos/200/200?random=3' },
];

export default projects;

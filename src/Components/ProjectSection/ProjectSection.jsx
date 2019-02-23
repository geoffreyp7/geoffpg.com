import React from 'react';
import styled from 'styled-components';
import Projects from '../../Data/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectSection () {

    const ProjectSectionContainer = styled.div`
    
    `;

    const projectCards = [];

    for (let i=0; i<Projects.projects.length; i+=1) {
        projectCards.push(
            <ProjectCard
            project={Projects.projects[i]}
            />
        )
    }

    return (
        <ProjectSectionContainer>
            {projectCards}
        </ProjectSectionContainer>
    )
}
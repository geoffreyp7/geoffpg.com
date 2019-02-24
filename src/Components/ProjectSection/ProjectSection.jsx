import React from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import Projects from '../../Data/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectSection () {

    const ProjectSectionContainer = styled.div`
        position: fixed;
        top: 82px;
      
        background-color: #F6F5F4;
        z-index: -5;
    `;

    const projectCards = [];
    const dataAnchors = [];

    for (let i=0; i<Projects.projects.length; i+=1) {
        projectCards.push(
          <div
          className="section"
          key={i}>
            <ProjectCard
            project={Projects.projects[i]}
            />
          </div>
        );
        dataAnchors.push(`section-${i+1}`);
    }

    return (
      // <ProjectSectionContainer>
        <ReactFullpage
          navigation
          debug
          anchors={dataAnchors}
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={comp => {
            return (
              <ReactFullpage.Wrapper>
                {projectCards}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      // </ProjectSectionContainer>
    );
}
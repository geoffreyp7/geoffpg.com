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

    const pluginWrapper = () => {
        require('fullpage.js/vendors/scrolloverflow.min.js');
    };

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
      <div style={
        {
        // position: 'absolute',
        backgroundColor: '#F6F5F4',
        // height: '100vh',
        // top: '300px',
        zIndex: '-100'
        }}>
        <ReactFullpage
          navigation
          debug
          responsiveHeight='650'
          bigSectionsDestination='top'
        //   sectionsColor={['#2232a2', '#378265', '#764565']}
          pluginWrapper = {pluginWrapper}
        //   scrollOverflow="true"
          anchors={dataAnchors}
          paddingTop="80px"
          licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
          render={comp => {
            return (
              <ReactFullpage.Wrapper>
                {projectCards}
              </ReactFullpage.Wrapper>
            );
          }}
        />
     </div>
    );
}
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Projectcard ({ project }) {

  const CardContainer = styled.div`
    padding: 5px;
  `;

  const ProjectHeading = styled.h2`
    font-size: 1.5rem;
  `;

  const ProjectDescription = styled.p`
    font-size: 1.0rem;
  `;

  const TechnologyList = styled.ul`
  
  `;

  const TechnologyListItem = styled.li`
  
  `;

  const ProjectImage = styled.img`

  `;

  const StatusContainer = styled.div`
  
  `;

  const ProjectLinkContainer = styled.div`
  
  `;

  const ProjectGitHubLinkContainer = styled.div`
  
  `;

  const { title, description, technologies, featureImage, status, url, github } = project;

  const technologyListItems = [];

  for (let i=0; i<technologies.length; i++) {
    technologyListItems.push(
      <TechnologyListItem
      key={i.toString()}
      >
        {technologies[i]}
      </TechnologyListItem>
    )
  }

  return (
    <CardContainer>
      <ProjectHeading>
        {title}
      </ProjectHeading>
      <ProjectDescription>
        {description}
      </ProjectDescription>
      <TechnologyList>
        {technologyListItems}
      </TechnologyList>
      <ProjectImage
      src={featureImage}
      />
      <StatusContainer>
        {status}
      </StatusContainer>
      <ProjectLinkContainer>
        {url}
      </ProjectLinkContainer>
      <ProjectGitHubLinkContainer>
        {github}
      </ProjectGitHubLinkContainer>
    </CardContainer>
  )

}

Projectcard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    featureImage: PropTypes.string,
    status: PropTypes.string,
    url: PropTypes.string,
    github: PropTypes.string,
  }),
}
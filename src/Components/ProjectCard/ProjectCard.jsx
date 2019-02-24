import React from 'react';
import styled from 'styled-components';
import globalStyles from '../../assets/globalStyles'
import PropTypes from 'prop-types';
import linkIcon from '../../assets/link-icon-64px.png'
import githubIcon from '../../assets/github-logo-64px.png'

export default function Projectcard ({ project }) {

  const CardContainer = styled.div`
    padding: 10px 30px;
    margin: 20px 10px;
    border: 1px solid ${globalStyles.lightTextBlack};
    border-radius: 5px;
    box-shadow: 0px 0px 6px ${globalStyles.lightTextBlack};
    display: flex;
    flex-wrap: wrap;
    background-color: white;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      margin: 100px 150px;
      padding: 50px 80px;
    }
  `;

  let Div = styled.div`

  `;

  const CardLeftCol = styled.div`
    flex-basis: 100%;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      flex-basis: 50%;
    }
  `;

  const CardRightCol = styled.div`
    flex-basis: 100%;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      flex-basis: 50%;
    }
  `;

  const ProjectTitleArea = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${globalStyles.boldTextBlack};

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      width: 80%;
      margin: 0px;
      text-align: left;
      padding-bottom: 10px;
    }
  `;

  const ProjectHeading = styled.h2`
    font-size: 1.2rem;
    margin: 0px;
    color: ${globalStyles.niceBlueHeading};
    margin-right: 10px;
    font-family: 'Yu Gothic';

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      font-size: 1.8rem;
    }
  `;

  const ProjectDescription = styled.p`
    font-size: 1rem;
    width: 100%;
    text-align: justify;
    margin: 6px 0px;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      font-size: 1.2rem;
      width: 80%;
      margin: 10px;
    }
  `;

  const TechnologyListHeading = styled.h3`
    border-bottom: 1px solid ${globalStyles.boldTextBlack};
    font-family: 'Yu Gothic';
    width: 60%;
    margin: auto;
    text-align: center;
    font-size: 1.1rem;
    padding-top: 7px;
    padding-bottom: 5px;
    color: ${globalStyles.niceBlueHeading};

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      font-size: 1.6rem;
      margin: 0px;
      padding: 5px;
      text-align: left;
    }
  `;

  const TechnologyList = styled.ul`
    list-style-type: none;
    padding: 0px;
    text-align: center;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      text-align: left;
    }
  `;

  const TechnologyListItem = styled.li`
  
  `;

  const ProjectImage = styled.img`
    max-width: 100%;
  `;

  const StatusContainer = styled.div`
  
  `;

  const ProjectLinkContainer = styled.div`
    padding: 0px 5px;
  `;

  const ProjectLinkIcon = styled.img`
    max-height: 1.2rem;

    @media only screen and (min-width: ${globalStyles.mediumPx}px) {
      max-height: 2.2rem;
    }
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
    // <CardContainer>
    //   <CardLeftCol>
    //     <ProjectTitleArea>
    //       <ProjectHeading>
    //         {title}
    //       </ProjectHeading>
    //       <ProjectLinkContainer>
    //         <a href={url} target="_blank" rel="noopener noreferrer">
    //           <ProjectLinkIcon src={linkIcon} />
    //         </a>
    //       </ProjectLinkContainer>
    //       <ProjectLinkContainer>
    //         <a href={github} target="_blank" rel="noopener noreferrer">
    //           <ProjectLinkIcon src={githubIcon} />
    //         </a>
    //       </ProjectLinkContainer>
    //     </ProjectTitleArea>
    //     <ProjectDescription>
    //       {description}
    //     </ProjectDescription>
    //   </CardLeftCol>
    //   <CardRightCol>
    //     <ProjectImage
    //     data-src={featureImage}
    //     />
    //     <TechnologyListHeading>
    //       Key Technologies
    //     </TechnologyListHeading>
    //     <TechnologyList>
    //       {technologyListItems}
    //     </TechnologyList>
    //   </CardRightCol>
    // </CardContainer>
    <Div>
      Hello
    </Div>
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
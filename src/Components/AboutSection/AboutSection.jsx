import React from 'react';
import styled from 'styled-components';
import globalStyles from '../../assets/globalStyles';
import sections from '../../Data/AboutSections'

export default function AboutSection () {
  
  const AboutContainer = styled.div`
    position: fixed;
    top: 82px;
    width: 100%;
    background-color: #F6F5F4;
    padding: 10px 20px;
    z-index: -5;
    height: 100vh;
    overflow: scroll;
    
    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      padding: 80px 120px;
    }
  `;
  
  const TitleContainer = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
  `;
  
  const NameTitle = styled.h1`
    font-size: 2.2rem;
    color: ${globalStyles.niceBlueHeading};
    text-shadow: 1px 1px ${globalStyles.boldTextBlack};
    
    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      font-size: 3.5rem;
    }
  `;
  
  const NameSubtitle = styled.h4`
    font-size: 1.4rem;
    color: ${globalStyles.lightTextBlack};
    
    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      font-size: 2rem;
    }
  `;
  
  const ColumnsContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      margin-top: 80px;
    }
  `;
  
  
  const LeftCol = styled.div`
    flex-basis: 100%;

    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      flex-basis: 60%;
      padding-right: 50px;
    }
  `;
  
  const RightCol = styled.div`
    flex-basis: 100%;

    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      flex-basis: 40%;
    }
  `;  
  
  const SectionContainer = styled.div`
  
  `;
  
  const SectionHeading = styled.h4`
  
  `;
  
  const SectionParagraph = styled.p`
    text-align: justify;
  `;

  const LeftColSections = sections.sections.filter(x => x.col === 'L').map((x) => {
    return (
      <SectionContainer key={x.title}>
        <SectionHeading>
          {x.title}
        </SectionHeading>
        <SectionParagraph>
          {x.content}
        </SectionParagraph>
      </SectionContainer>
    )
  });
  const RightColSections = sections.sections.filter(x => x.col === 'R').map((x) => {
    return (
      <SectionContainer key={x.title}>
        <SectionHeading>
          {x.title}
        </SectionHeading>
        <SectionParagraph>
          {x.content}
        </SectionParagraph>
      </SectionContainer>
    )
  });
  
  return (
    <AboutContainer>
      <TitleContainer>
        <NameTitle>
        Geoffrey Parry-Grass
        </NameTitle>
        <NameSubtitle>
        Software Developer
        </NameSubtitle>
      </TitleContainer>
        <ColumnsContainer>
          <LeftCol>
            {LeftColSections}
          </LeftCol>
          <RightCol>
            {RightColSections}
          </RightCol>
        </ColumnsContainer>
    </AboutContainer>
  )
  
}
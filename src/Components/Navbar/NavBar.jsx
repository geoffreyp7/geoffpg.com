import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import githubLogo64px from '../../assets/github-logo-64px.png';
import linkedinLogo64px from '../../assets/linkedin-logo-64px.png';
import globalStyles from '../../assets/globalStyles'
import { PropTypes } from 'prop-types';

export default function NavBar (props) {

  const [activeSelection, setActiveSelection] = useState(1);

  const NavBarContainer = styled.nav`
    display: flex;
    background-color: white;
    box-shadow: 0px 0px 10px ${globalStyles.boldTextBlack};
    position: fixed;
    width: 100%;
    z-index: 100;
  `;

  const LogoText = styled.h2`
    font-family: 'Yu Gothic';
    font-size: 1.5rem;
    margin: 0px;
    color: ${globalStyles.boldTextBlack};
  `;
  
  const NavBarArea = styled.div`
    flex-basis: 400px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  `;
  
  const NavBarTopSection = styled.div`
    flex-basis: 100%;
    display: flex;
    padding-top: 3px;
  `;
  
  const NavBarBottomSection = styled.div`
    flex-basis: 100%;
    display: flex;
    height: 2.5rem;
    border-top: 1px ${globalStyles.niceBlue} solid;
  `;

  const InternalLinkContainer = styled.div`
    flex-basis: 33.333%;
    display: flex;
    height: 100%;
    background-color: ${props => props.selected ? globalStyles.niceBlue : 'white'};
  `;
  
  const ExternalLinkContainer = styled.div`
    flex-basis: 33.333%;
    display: flex;
    align-items: center;
  `;

  const ExternalLink = styled.a`
    margin: auto;
  `;

  const ExternalLinkIcon = styled.img`
    max-height: 2rem;
    opacity: 0.64;
  `;
  
  const LogoContainer = styled.div`
    flex-basis: 33.333%;
    text-align: center;
  `;
  
  const LinksContainer = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
  `;

  const InternalLink = styled(NavLink)`
    text-decoration: none;
    margin: auto;
    font-size: 1.1rem;
    color: ${props => props.selected ? globalStyles.boldTextBlack : globalStyles.lightTextBlack};
    font-weight: ${props => props.selected ? 'bold' : 'normal'}
  `;
  
  return (
    <NavBarContainer>
      <NavBarArea>
        <NavBarTopSection>
          <ExternalLinkContainer>
          <ExternalLink
          href="https://github.com/geoffreyp7"
          target="_blank"
          rel="noopener noreferrer"
          >
            <ExternalLinkIcon src={githubLogo64px} alt="github logo" />
          </ExternalLink>
          </ExternalLinkContainer>
          <LogoContainer>
            <LogoText>GPG</LogoText>
          </LogoContainer>
          <ExternalLinkContainer>
          <ExternalLink
          href="https://www.linkedin.com/in/geoffrey-parry-grass-35294aa4/"
          target="_blank"
          rel="noopener noreferrer"
          >
            <ExternalLinkIcon src={linkedinLogo64px} alt="linkedin logo" />
          </ExternalLink>
          </ExternalLinkContainer>
        </NavBarTopSection>
        <NavBarBottomSection>
          <LinksContainer>
            <InternalLinkContainer selected={activeSelection === 0}>
              <InternalLink 
                to='/'
                selected={activeSelection === 0}
                isActive={(match) => {
                  if (match) {
                   setActiveSelection(0);
                   return(true);
                  }}}
                >
                  About
              </InternalLink>
            </InternalLinkContainer>
            <InternalLinkContainer selected={activeSelection === 1}>
              <InternalLink
                to='/projects'
                selected={activeSelection === 1}
                isActive={(match) => {
                  if (match) {
                   setActiveSelection(1);
                   return(true);
                  }}}
                >
                  Projects
                </InternalLink>
            </InternalLinkContainer>
            <InternalLinkContainer selected={activeSelection === 2}>
              <InternalLink
                to='/contact'
                selected={activeSelection === 2}
                isActive={(match) => {
                  if (match) {
                   setActiveSelection(2);
                   return(true);
                  }}}
                >
                  Contact
              </InternalLink>
            </InternalLinkContainer>
          </LinksContainer>
        </NavBarBottomSection>
      </NavBarArea>
    </NavBarContainer>
    );
  }
import React from 'react';
import styled from 'styled-components';
import globalStyles from '../../assets/globalStyles'
import linkedinLogo256px from '../../assets/linkedin-logo-256px.png';
import emailLogo256px from '../../assets/email-logo-256px.png';

export default function ContactSection () {
  
  const ContactContainer = styled.div`
    position: fixed;
    top: 82px;
    width: 100%;
    background-color: #F6F5F4;
    padding: 10px 20px;
    z-index: -5;
    height: 100vh
    
    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      padding: 80px 120px;
    }
  `;

  const ContactTitleContainer = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;
  `;

  const ContactTitle = styled.h2`
    font-size: 1.8rem;
    text-shadow: 1px 1px ${globalStyles.boldTextBlack};
    color: ${globalStyles.niceBlueHeading};

    @media only screen and (min-width: ${globalStyles.mediumPx}) {
      font-size: 3.5rem;
    }
  `;

  const ContactLinksContainer = styled.div`

  `;

  const ContactIconsContainer = styled.div`
    text-align: center;
  `;

  const ContactIconContainer = styled.div`
    display: inline;
  `;

  const ContactIcon = styled.img`
    max-height: 5rem;
    margin: 0px 10px;
  `;

  return (
    <ContactContainer>
      <ContactTitleContainer>
        <ContactTitle>
          Contact
        </ContactTitle>
      </ContactTitleContainer>
      <ContactLinksContainer>
        <ContactIconsContainer>
          <ContactIconContainer>
            <a href="mailto: geoff@geoffpg.com">
              <ContactIcon src={emailLogo256px} alt='email icon' />
            </a>
          </ContactIconContainer>
          <ContactIconContainer>
            <a
            href="https://www.linkedin.com/in/geoffrey-parry-grass-35294aa4/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <ContactIcon src={linkedinLogo256px} alt='linkedin icon' />
            </a>
          </ContactIconContainer>
        </ContactIconsContainer>
      </ContactLinksContainer>
    </ContactContainer>
  )
}
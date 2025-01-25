import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #3b3a63;
  color: #fff;
  padding: 5px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 0 20px;
`;

const Separator = styled.span`
  color: #fff;
  font-weight: bold;
  padding: 0 10px;
`;

const FooterComponent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialMediaIcons>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </IconLink>
          <IconLink href="#" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </IconLink>
        </SocialMediaIcons>
        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <Separator>|</Separator>
          <FooterLink href="#">Terms of Use</FooterLink>
          <Separator>|</Separator>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterLinks>
        <p>&copy; {currentYear} Youth of Maharashtra. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterComponent;
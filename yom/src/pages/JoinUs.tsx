import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const JoinUsContainer = styled.div`
  position: relative; /* Ensure the container is a positioned parent */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Banner = styled.div`
  background-color: #e9f5ed;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out;
  position: relative;
  z-index: 1; /* Ensure banner is above the overlapping elements */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const BannerContent = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const BannerText = styled.h2`
  font-size: 2.5rem;
  color: #3b3a63;
`;

const DescriptionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 1rem auto;
`;

const OptionsContainer = styled.div`
  position: absolute; /* Position the options relative to the JoinUsContainer */
  top: 50%; /* Adjust positioning as needed */
  left: 50%; /* Adjust positioning as needed */
  transform: translate(-50%, -50%); /* Center the options */
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 2; /* Ensure options are above the banner */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OptionCard = styled.div`
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const OptionTitle = styled.h3`
  font-size: 1.8rem;
  color: #3b3a63;
`;

const OptionDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const JoinUs: React.FC = () => {
  return (
    <JoinUsContainer>
      <Banner>
        <BannerImage
          src="../src/assets/images/map.jpg"
          alt="Join Us"
        />
        <BannerContent>
          <BannerText>
            "The best way to find yourself is to lose yourself in the service of others."
          </BannerText>
          <DescriptionText>
            The time has come for you to join Spread Happiness Foundation as
            a Corporate Member. Join our organization today and contribute to
            various social activities.
          </DescriptionText>
        </BannerContent>
      </Banner>
      <OptionsContainer>
        <Link to="/join-us" style={{ textDecoration: 'none' }}>
          <OptionCard>
            <OptionTitle>Become a Member</OptionTitle>
            <OptionDescription>
              Join as a member and enjoy exclusive benefits and opportunities.
            </OptionDescription>
          </OptionCard>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <OptionCard>
            <OptionTitle>Register Your Organization</OptionTitle>
            <OptionDescription>
              Register your organization and collaborate with us for a better future.
            </OptionDescription>
          </OptionCard>
        </Link>
      </OptionsContainer>
    </JoinUsContainer>
  );
};

export default JoinUs;

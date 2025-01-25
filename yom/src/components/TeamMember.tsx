// TeamMember.tsx

import React from 'react';
import styled from 'styled-components';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const MemberRole = styled.p`
  font-weight: bold;
`;

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <MemberContainer>
      <MemberImage src={image} alt={name} />
      <MemberName>{name}</MemberName>
      <MemberRole>{role}</MemberRole>
    </MemberContainer>
  );
};

export default TeamMember;

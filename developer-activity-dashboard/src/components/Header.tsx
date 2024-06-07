import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #007bff;
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Developer Activity Dashboard</h1>
    </HeaderContainer>
  );
};

export default Header;

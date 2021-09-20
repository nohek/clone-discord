import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

import { Container, Title, ExpandIcon } from './styles';


const ServerName: React.FC = () => {
  return (
    <Container>
      <Title>Servidor da Fran</Title>
      <ExpandIcon>
        <FaAngleDown />
      </ExpandIcon>
    </Container>
  )
}

export default ServerName;
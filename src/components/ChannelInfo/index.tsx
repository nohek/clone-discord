import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

import { FaHashtag } from 'react-icons/fa';


const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon>
        <FaHashtag />
      </HashtagIcon>

      <Title>
        chat-livre
      </Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  )
}

export default ChannelInfo;
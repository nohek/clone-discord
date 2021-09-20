import React from 'react';
import { FaAt } from 'react-icons/fa';
import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input } from './styles';


const ChannelData: React.FC = () => {
  return (
    <Container>

      <Messages>
        <ChannelMessage author="Janaina Aparecida" content="Calor bem melhor que frio né" date="20/09/2021" isBot />
        <ChannelMessage author="Ronaldo Sena" content="Calor bem melhor que frio né" date="20/09/2021" />
        <ChannelMessage author="Guilherme Dvan" content="Calor bem melhor que frio né" date="20/09/2021" />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder="Conversar em #chat-livre" />
        <FaAt />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;
import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';
import { FaPlus } from 'react-icons/fa';


const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon>
          <FaPlus />
        </AddCategoryIcon>
      </Category>

      <ChannelButton channelName="chat-livre" selected={true} />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="fotos" />
      <ChannelButton channelName="dev" />

    </Container>
  )
}

export default ChannelList;
import React from 'react';
import { FaHashtag, FaUserPlus, FaCog } from 'react-icons/fa';

import { Container, InviteIcon, ConfigIcon } from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <FaHashtag />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon>
          <FaUserPlus />
        </InviteIcon>

        <ConfigIcon>
          <FaCog />
        </ConfigIcon>

      </div>
    </Container>
  )
}

export default ChannelButton;
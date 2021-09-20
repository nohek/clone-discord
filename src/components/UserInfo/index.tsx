import React from 'react';
import { FaHeadphonesAlt, FaMicrophone, FaCog } from 'react-icons/fa';

import { Container, Profile, Avatar, UserData, Icons } from './styles';


const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Fran Moreira </strong>
          <span>#5555</span>
        </UserData>
      </Profile>

      <Icons>
        <FaMicrophone />
        <FaHeadphonesAlt />
        <FaCog />
      </Icons>
    </Container>
  )
}

export default UserInfo;
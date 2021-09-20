import React from 'react';
import { } from 'react-icons/fa';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User >
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Francyelle Moreira" />

      <Role>Offline - 10</Role>
      <UserRow nickname="Leticia" isBot />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" isBot />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
      <UserRow nickname="Leticia" />
    </Container>
  )
}

export default UserList;
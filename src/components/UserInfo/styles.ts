import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UI;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;
    opacity: 0.7;
    transition: 200ms;

    :hover {
      opacity: 1;
    }
  }
  
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

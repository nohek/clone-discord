import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 200ms;

  > div {
    display: flex;
    align-items: center;
    color: var(--senary);
  }

  > div span {
    font-size: 15px;
    margin-left: 5px;
  }

  &.active, &:hover {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white)
    }
  }
`;

export const InviteIcon = styled.div`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;
export const ConfigIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;

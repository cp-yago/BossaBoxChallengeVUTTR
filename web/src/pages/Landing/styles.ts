import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type:none;
  }

  li {
    width: 60vw;
    height: 150px;
    align-self: center;
    margin: 20px 0px;
  }
`;

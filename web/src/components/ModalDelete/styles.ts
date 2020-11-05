import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  button {
      width: 100px;
      height: 40px;
      margin-top: 20px;

      &:hover {
        opacity: 0.8;
      }
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FCAEAC;
  border-radius: 10px;
  padding: 30px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    background-color: transparent;
  }

  svg, h3, p {
    color: #CC4C4C;
  }
`;

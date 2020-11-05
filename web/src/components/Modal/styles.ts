import styled from 'styled-components';

import Modal from 'react-modal';

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .form {
    p {
      color: #244AA8;
      margin-top: 15px;
    }

    p + input {
      height: 40px;
      width: 600px;

      border: 0;
      border-radius: 8px;
      padding-left: 10px;
    }

    button {
      width: 100px;
      height: 40px;
      background-color: #244AA8;
      border-radius: 10px;
      margin-top: 20px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #B9C6FA;
  border-radius: 10px;
  padding: 30px;


  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .exit-button {
    background-color: transparent;
  }

  svg, h3{
    color: #244AA8;
  }
`;

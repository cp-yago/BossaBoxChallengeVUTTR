import styled from 'styled-components';

export const Item = styled.li`
  width: 60%;
  min-height: 130px;

  background-color: #CAD6FC;
  border-radius: 10px;
  padding: 10px 20px;

  &:marker {
    display: none;
    color: red;
  }

  .links {
    display: flex;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    width: 180px;
  }

  a {
    color: #2F55CC;
    font-size: 30px;
    text-decoration: none;
  }

  p {
    color: #2F55CC;
    opacity: 0.7;
    font-size: 20px;
    margin: 10px 0px;
  }

  strong {
    margin-right: 10px;
    color: #244AA8;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  width: 80px;
  padding: 5px;
`;

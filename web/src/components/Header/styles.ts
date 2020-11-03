import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100vw;
  background-color: #9AAEF7;

  .contents {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      background-color: #F95E5A;
      border-radius: 10px;
      padding: 10px;
      margin-right: 25px;
    }

    h1 {
      color: #CC4C4C;
      font-size: 40px;
    }

    h3 {
      color: #F95E5A;
      opacity: 0.9;
      font-size: 30px;
    }
  }

  .search {
    display: flex;
    align-items: center;
  }

  .checkbox {
    display: flex;
    align-items: center;
    margin-top: 20px;

    span {
      margin-left: 10px;
    }
  }
`;

export const SearchInput = styled.input`
  height: 50px;
  width: 500px;
  border-radius: 10px 0px 0px 10px;
  background-color: #CAD6FC;
  border: 0;
  padding-left: 20px;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
`;

export const SearchButton = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 0px 10px 10px 0px;
  border: 0;
`;

export const AddButton = styled.button`
  height: 50px;
  width: 80px;
  border-radius: 10px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 150px;

  svg {
    margin: 5px;
  }
`;

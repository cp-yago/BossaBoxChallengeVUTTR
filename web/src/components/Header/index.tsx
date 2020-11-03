import React from 'react';

import { FiPlus } from 'react-icons/fi';

import Tool from '../../assets/images/tool.svg';

import {
  Container,
  SearchInput,
  CheckboxInput,
  SearchButton,
  AddButton,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <div>
      <div className="contents">
        <img src={Tool} alt="vuttr" width={85} />
        <div>
          <h1>VUTTR</h1>
          <h3>Very Useful Tools to Remember</h3>
        </div>
      </div>

      <div className="search">
        <SearchInput placeholder="Search" />
        <SearchButton>Search</SearchButton>
        <AddButton>
          <FiPlus />
          <span>Add</span>
        </AddButton>
      </div>

      <div className="checkbox">
        <CheckboxInput type="checkbox" />
        <span>Search in tags only</span>
      </div>

    </div>
  </Container>
);

export default Header;

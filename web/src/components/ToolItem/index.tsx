import React from 'react';

import { FiEdit, FiTrash } from 'react-icons/fi';

import { Item, Button } from './styles';

const ToolItem: React.FC = () => (
  <Item>
    <div className="links">
      <a href="http://google.com">Notion</a>
      <div className="buttons">
        <Button>
          <FiEdit size={15} />
          <span>Edit</span>
        </Button>
        <Button>
          <FiTrash size={15} />
          <span>Delete</span>
        </Button>
      </div>
    </div>
    <p>
      Lorem Ipsum is simply dummy text industry.
      Lorem Ipsum has been the industrys standard
      dummy text ever since the 1500s
    </p>
    <strong>#organization</strong>
    <strong>#organization</strong>
    <strong>#organization</strong>
  </Item>
);

export default ToolItem;

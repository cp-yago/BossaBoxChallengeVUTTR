import React from 'react';

import { FiEdit, FiTrash } from 'react-icons/fi';

import { Item, Button } from './styles';

interface ToolItemProps {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const ToolItem: React.FC<ToolItemProps> = ({
  title, link, description, tags,
}) => (
  <Item>
    <div className="links">
      <a href={link}>{title}</a>
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
      {description}
    </p>
    {
      tags.map((tag) => (
        <strong>{`#${tag}`}</strong>
      ))
    }
  </Item>
);

export default ToolItem;

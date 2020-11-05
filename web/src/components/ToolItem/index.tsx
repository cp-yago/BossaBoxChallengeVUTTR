import React from 'react';
import { FiTrash } from 'react-icons/fi';
import ModalDelete from '../ModalDelete';
import { useModal } from '../../hooks/modal';

import { Item, Button } from './styles';

interface ToolItemProps {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const ToolItem: React.FC<ToolItemProps> = ({
  id, title, link, description, tags,
}) => {
  const { isDeleteModalOpen } = useModal();

  return (
    <>
      <ModalDelete />
      <Item>
        <div className="links">
          <a href={link}>{title}</a>
          <div className="button">
            <Button onClick={() => isDeleteModalOpen(id)}>
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
          <strong key={tag}>{`#${tag}`}</strong>
        ))
      }
      </Item>
    </>
  );
};

export default ToolItem;

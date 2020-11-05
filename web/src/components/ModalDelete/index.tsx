import React, { useCallback } from 'react';
import { FiXOctagon, FiCheckCircle } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';
import { useTools } from '../../hooks/tools';
import { Container, Content } from './styles';

const ModalDelete: React.FC = () => {
  const { isDeleteModalOpen, isDeleteOpen, toolItem } = useModal();
  const { deleteTool } = useTools();

  const handleDeleteTool = useCallback((id) => {
    deleteTool(id);
  }, [deleteTool]);

  return (
    <Container
      isOpen={isDeleteOpen}
      onRequestClose={() => isDeleteModalOpen()}
      ariaHideApp={false}
    >
      <Content>
        <div className="header">
          <h3>Are you sure?</h3>
        </div>

        <div className="buttons">
          <button type="button" className="button" onClick={() => handleDeleteTool(toolItem)}>
            <FiCheckCircle color="#0E995D" />
            <p>Confirm</p>
          </button>

          <button type="button" className="button" onClick={() => isDeleteModalOpen()}>
            <FiXOctagon size={15} />
            <p>Cancel</p>
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default ModalDelete;

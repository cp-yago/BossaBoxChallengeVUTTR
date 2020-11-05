import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

interface ModalContext {
  isAddToolModalOpen(): void;
  isAddModalOpen: boolean;
  isDeleteOpen: boolean;
  isDeleteModalOpen(id?: string): void;
  toolItem: string;
}

const ModalContext = createContext<ModalContext>({} as ModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [toolItem, setToolItem] = useState('');

  const isAddToolModalOpen = useCallback(() => {
    setIsAddModalOpen(!isAddModalOpen);
  }, [isAddModalOpen]);

  const isDeleteModalOpen = useCallback((id) => {
    console.log('isDeleteOpen: ', isDeleteOpen, id);
    setDeleteOpen(!isDeleteOpen);
    setToolItem(id);
  }, [isDeleteOpen]);

  const value = useMemo(() => ({
    isAddToolModalOpen,
    isAddModalOpen,
    isDeleteModalOpen,
    isDeleteOpen,
    toolItem,
  }), [
    isAddToolModalOpen, isAddModalOpen, isDeleteModalOpen, isDeleteOpen, toolItem,
  ]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModal = (): ModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used whithin a ModalProvider');
  }

  return context;
};

export { ModalProvider, useModal };

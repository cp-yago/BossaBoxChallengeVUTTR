import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

interface ModalContext {
  isAddToolModalOpen(): void;
  isAddModalOpen: boolean;
}

const ModalContext = createContext<ModalContext>({} as ModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const isAddToolModalOpen = useCallback(() => {
    setIsAddModalOpen(!isAddModalOpen);
  }, [isAddModalOpen]);

  const value = useMemo(() => ({
    isAddToolModalOpen,
    isAddModalOpen,
  }), [
    isAddToolModalOpen, isAddModalOpen,
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

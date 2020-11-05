import React from 'react';

import { ToolsProvider } from './tools';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => (
  <ToolsProvider>
    <ModalProvider>
      {children}
    </ModalProvider>
  </ToolsProvider>
);

export default AppProvider;

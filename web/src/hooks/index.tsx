import React from 'react';

import { ToolsProvider } from './tools';

const AppProvider: React.FC = ({ children }) => (
  <ToolsProvider>
    {children}
  </ToolsProvider>
);

export default AppProvider;

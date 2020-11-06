import React from 'react';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import Landing from './pages/Landing';

const App: React.FC = () => (
  <AppProvider>
    <Landing />
    <GlobalStyle />
  </AppProvider>
);

export default App;

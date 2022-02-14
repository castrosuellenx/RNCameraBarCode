import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Routes from './routes';
import { light } from './styles/themes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

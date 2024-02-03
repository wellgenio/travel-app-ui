import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/screens/Home';

import theme from './src/theme';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
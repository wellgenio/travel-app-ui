import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';

const Stack = createStackNavigator();

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
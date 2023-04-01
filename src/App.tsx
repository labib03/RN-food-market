import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './router';

function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}

export default App;

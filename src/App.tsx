import React from 'react';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
}

export default App;

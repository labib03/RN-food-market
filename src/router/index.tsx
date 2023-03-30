import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SplashScreen} from 'pages/index';

export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
};

const options = {headerShown: false, headerTransparent: true};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={options} />
    </Stack.Navigator>
  );
};

export default Router;

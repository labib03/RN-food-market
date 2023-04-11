import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  DetailScreen,
  SignIn,
  SignUp,
  SignUpAddress,
  SignUpSuccess,
  SplashScreen,
} from 'pages/index';
import BottomTabNavigation from './BottomTabNavigation';

export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SignUpAddress: undefined;
  SignUpSuccess: undefined;
  TabStackScreen: undefined;
  DetailScreen: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: false,
  headerTransparent: true,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={options} />
      <Stack.Screen name="SignUp" component={SignUp} options={options} />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={options}
      />
      <Stack.Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
        options={options}
      />
      <Stack.Screen
        name="TabStackScreen"
        component={BottomTabNavigation}
        options={options}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;

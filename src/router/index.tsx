import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  Home,
  SignIn,
  SignUp,
  SignUpAddress,
  SignUpSuccess,
  SplashScreen,
} from 'pages/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SignUpAddress: undefined;
  SignUpSuccess: undefined;
  TabStackScreen: undefined;
};

const options: NativeStackNavigationOptions = {
  headerShown: false,
  headerTransparent: true,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

const RootStackNavigation = () => {
  return (
    // <NavigationContainer>
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
        component={TabNavigation}
        options={options}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RootStackNavigation;

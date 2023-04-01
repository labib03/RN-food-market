import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  Home,
  Order,
  Profile,
  SignIn,
  SignUp,
  SignUpAddress,
  SignUpSuccess,
  SplashScreen,
} from 'pages/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabComponent} from 'components';

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

type TabStackParamsList = {
  Home: undefined;
  Order: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamsList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <BottomTabComponent {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
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

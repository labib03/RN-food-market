import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home, Order, Profile} from 'pages/index';
import {BottomTabComponent} from 'components';

export type TabStackParamsList = {
  Home: undefined;
  Order: undefined;
  Profile: undefined;
};

const options: BottomTabNavigationOptions = {
  headerShown: false,
  headerTransparent: true,
};

const Tab = createBottomTabNavigator<TabStackParamsList>();

const BottomTabNavigation = () => {
  const renderCustomTabBar = (props: any) => <BottomTabComponent {...props} />;

  return (
    <Tab.Navigator initialRouteName="Home" tabBar={renderCustomTabBar}>
      <Tab.Screen name="Home" component={Home} options={options} />
      <Tab.Screen name="Order" component={Order} options={options} />
      <Tab.Screen name="Profile" component={Profile} options={options} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

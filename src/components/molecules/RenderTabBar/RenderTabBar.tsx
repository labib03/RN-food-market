import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {TabBar} from 'react-native-tab-view';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import scaling from 'config/scaling';

const RenderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      gap={2}
      pressColor="transparent"
      indicatorStyle={{
        backgroundColor: colors.secondary,
      }}
      style={{backgroundColor: colors.white}}
      tabStyle={styles.tabItem}
      renderLabel={({route, focused}) => (
        <Text style={styles.tabText(focused)}>{route.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabItem: {
    paddingHorizontal: scaling(4),
    paddingVertical: scaling(4),
    width: 'auto',
    margin: 0,
  },
  tabText: (focused: any) => {
    return {
      ...GlobalStyle.Medium,
      color: focused ? colors.black : colors.grey,
      margin: 8,
    };
  },
});

export default RenderTabBar;

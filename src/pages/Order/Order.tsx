import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

import {Header, RenderTabBar} from 'components';
import EmptyOrder from 'pages/EmptyOrder/EmptyOrder';
import GlobalStyle from 'theme/styles/global_styles';
import InProgressTabs from './components/InProgressTabs';
import PastOrderTabs from './components/PastOrderTabs';
import styles from './style';

const renderScene = SceneMap({
  first: InProgressTabs,
  second: PastOrderTabs,
});

const Order = () => {
  const layout = useWindowDimensions();
  const [isEmptyOrder] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Order'},
  ]);

  return isEmptyOrder ? (
    <EmptyOrder />
  ) : (
    <View style={GlobalStyle.RootContainer}>
      <Header title="Your Orders" subtitle="Wait for the best meals" />

      <View style={styles.container}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={RenderTabBar}
          lazy
        />
      </View>
    </View>
  );
};

export default Order;

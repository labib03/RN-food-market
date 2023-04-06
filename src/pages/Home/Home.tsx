import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {FoodSlider, Header, RenderTabBar} from 'components';
import colors from 'theme/styles/colors';
import styles from './style';

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.white}} />
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: colors.light}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
});

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);
  return (
    <View style={styles.container}>
      <Header
        title="Food Market"
        subtitle="Let's get some foods"
        isRenderImage
      />

      <View>
        <FoodSlider />
      </View>

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

export default Home;

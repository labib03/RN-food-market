import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

import {FoodSlider, Header, RenderTabBar} from 'components';
import NewTasteTabs from './components/NewTasteTabs';
import PopularTabs from './components/PopularTabs';
import RecommendedTabs from './components/RecommendedTabs';
import styles from './style';

const renderScene = SceneMap({
  first: NewTasteTabs,
  second: PopularTabs,
  third: RecommendedTabs,
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

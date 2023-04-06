import React from 'react';
import {View} from 'react-native';

import {FoodSlider, Header} from 'components';

const Home = () => {
  return (
    <View>
      <Header
        title="Food Market"
        subtitle="Let's get some foods"
        isRenderImage
      />
      <FoodSlider />
    </View>
  );
};

export default Home;

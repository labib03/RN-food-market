import React from 'react';
import {View, Text} from 'react-native';

import {Header} from 'components';

const Home = () => {
  return (
    <View>
      <Header
        title="Food Market"
        subtitle="Let's get some foods"
        isRenderImage
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

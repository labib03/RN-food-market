import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from 'assets';
import scaling from 'config/scaling';
import FoodCard from '../FoodCard/FoodCard';

const FoodSlider = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <FoodCard image={FoodDummy1} title="Food 1" totalActiveStar={5} />
        <FoodCard image={FoodDummy2} title="Food 2" totalActiveStar={3} />
        <FoodCard image={FoodDummy3} title="Food 3" totalActiveStar={4} />
        <FoodCard image={FoodDummy4} title="Food 4" totalActiveStar={5} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: scaling(24),
    margin: scaling(24),
  },
});

export default FoodSlider;

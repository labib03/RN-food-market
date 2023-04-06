import {FoodItem1, FoodItem2, FoodItem3} from 'assets';
import {FoodListItem} from 'components';
import scaling from 'config/scaling';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import colors from 'theme/styles/colors';

const NewTasteTabs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <FoodListItem
          imagePath={FoodItem1}
          title="Food Item 1"
          price="48.000"
          totalActiveStar={3}
        />
        <FoodListItem
          imagePath={FoodItem2}
          title="Food Item 2"
          price="50.000"
          totalActiveStar={4}
        />
        <FoodListItem
          imagePath={FoodItem3}
          title="Food Item 3"
          price="30.000"
          totalActiveStar={5}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    gap: scaling(20),
    paddingVertical: scaling(20),
  },
});

export default NewTasteTabs;

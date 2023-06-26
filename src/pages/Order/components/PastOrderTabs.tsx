import {FoodItem1, FoodItem2, FoodItem3} from 'assets';
import {FoodListItem} from 'components';
import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from '../style';

const PastOrderTabs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.wrapper}>
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

export default PastOrderTabs;

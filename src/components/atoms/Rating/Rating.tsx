import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IconStarActive, IconStartInactive} from 'assets';
import scaling from 'config/scaling';

type Props = {
  totalActiveStar: number;
};

const Rating: React.FC<Props> = ({totalActiveStar}) => {
  return (
    <View style={styles.ratingWrapper}>
      <View style={styles.starWrapper}>
        {[...Array(totalActiveStar)].map((_, idx) => (
          <View key={idx}>
            <IconStarActive />
          </View>
        ))}
        {[...Array(5 - totalActiveStar)].map((_, idx) => (
          <View key={idx}>
            <IconStartInactive />
          </View>
        ))}
      </View>
      <Text>4.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  starWrapper: {flexDirection: 'row'},
  ratingWrapper: {flexDirection: 'row', alignItems: 'center', gap: scaling(8)},
});

export default Rating;

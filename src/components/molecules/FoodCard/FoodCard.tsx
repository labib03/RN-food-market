import scaling from 'config/scaling';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {Rating} from '../../atoms';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';

type Props = {
  image: ImageSourcePropType;
  title: string;
  totalActiveStar: 1 | 2 | 3 | 4 | 5;
};

const FoodCard: React.FC<Props> = ({image, title, totalActiveStar}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.descWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Rating totalActiveStar={totalActiveStar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scaling(200),
    height: scaling(210),
    backgroundColor: colors.light,
    borderRadius: scaling(8),
    overflow: 'hidden',
    shadowColor: '#c1c1c1',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 8,
  },
  image: {
    width: scaling(200),
    height: scaling(140),
    resizeMode: 'cover',
  },
  title: {...GlobalStyle.Reguler, fontSize: scaling(16), color: colors.black},
  descWrapper: {padding: scaling(12)},
});

export default FoodCard;

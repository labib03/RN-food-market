import scaling from 'config/scaling';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import {Rating} from '../../atoms';

type Props = {
  imagePath: ImageSourcePropType;
  title: string;
  price: string;
  totalActiveStar: number;
};

const FoodListItem: React.FC<Props> = ({
  imagePath,
  title,
  price,
  totalActiveStar,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image style={styles.image} source={imagePath} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>RP. {price}</Text>
        </View>
      </View>

      <Rating totalActiveStar={totalActiveStar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaling(24),
  },
  leftContent: {flexDirection: 'row', alignItems: 'center', gap: scaling(12)},
  image: {width: scaling(60), height: scaling(60)},
  title: {
    ...GlobalStyle.Reguler,
    color: colors.black,
    fontSize: scaling(15.5),
    letterSpacing: scaling(0.3),
  },
  price: {
    ...GlobalStyle.Reguler,
    color: colors.grey,
    fontSize: scaling(12.5),
    letterSpacing: scaling(0.3),
  },
});

export default FoodListItem;

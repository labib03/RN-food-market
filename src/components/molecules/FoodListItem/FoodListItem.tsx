import scaling from 'config/scaling';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import {Rating} from '../../atoms';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = {
  imagePath: ImageSourcePropType;
  title: string;
  price: string;
  totalActiveStar?: number;
  totalItems?: number;
  type: string;
};

const FoodListItem: React.FC<Props> = ({
  imagePath,
  title,
  price,
  totalActiveStar,
  totalItems,
  type,
}) => {
  const navigation =
    useNavigation<NativeStackScreenProps<ParamListBase>['navigation']>();

  const renderComponent = () => {
    switch (type) {
      case 'home':
        return (
          <View style={styles.container}>
            <View style={styles.leftContent}>
              <Image style={styles.image} source={imagePath} />

              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>RP. {price}</Text>
              </View>
            </View>

            {totalActiveStar && <Rating totalActiveStar={totalActiveStar} />}
          </View>
        );
      case 'order-summary':
        return (
          <View style={styles.container}>
            <View style={styles.leftContent}>
              <Image style={styles.image} source={imagePath} />

              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>RP. {price}</Text>
              </View>
            </View>

            {totalItems && <Text style={styles.price}>{totalItems} items</Text>}
          </View>
        );
      case 'order-in-progress':
        return (
          <View style={styles.container}>
            <View style={styles.leftContent}>
              <Image style={styles.image} source={imagePath} />

              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>RP. {price}</Text>
              </View>
            </View>
          </View>
        );
      case 'order-past-order':
        return (
          <View style={styles.container}>
            <View style={styles.leftContent}>
              <Image style={styles.image} source={imagePath} />

              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>RP. {price}</Text>
              </View>
            </View>

            {totalItems && <Text style={styles.price}>{totalItems} items</Text>}
          </View>
        );
      default:
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DetailScreen')}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image style={styles.image} source={imagePath} />

          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>RP. {price}</Text>
          </View>
        </View>

        {totalActiveStar && <Rating totalActiveStar={totalActiveStar} />}
        {totalItems && <Text style={styles.price}>{totalItems} items</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

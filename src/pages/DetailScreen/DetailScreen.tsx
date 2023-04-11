import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BackIcon, FoodDummy1} from 'assets';
import {Button, Rating} from 'components';
import scaling from 'config/scaling';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import Counter from './components/Counter';

const DetailScreen = () => {
  const [amount, setAmount] = React.useState<number>(1);

  const navigation =
    useNavigation<NativeStackScreenProps<ParamListBase>['navigation']>();
  return (
    <View style={GlobalStyle.RootContainer}>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <BackIcon color={colors.white} />
      </Pressable>
      <Image
        style={{
          width: Dimensions.get('screen').width,
          height: scaling(300),
        }}
        source={FoodDummy1}
        resizeMode="cover"
      />

      <View style={styles.wrapper}>
        <View style={styles.mainContent}>
          <View style={styles.titleWrapper}>
            <View>
              <Text style={GlobalStyle.heading_3_primary}>Cherry Healthy</Text>
              <Rating totalActiveStar={4} />
            </View>

            <View>
              <Counter amount={amount} setAmount={setAmount} />
            </View>
          </View>

          <Text style={GlobalStyle.heading_4_secondary}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>

          <View>
            <Text style={GlobalStyle.heading_4_primary}>Ingredients:</Text>
            <Text style={GlobalStyle.heading_4_secondary}>
              Seledri, telur, blueberry, madu.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={GlobalStyle.RootContainer}>
            <Text style={GlobalStyle.heading_5_secondary}>Total Price</Text>
            <Text style={GlobalStyle.heading_2_primary}>
              RP. {Intl.NumberFormat('id-ID').format(amount * 50000)}
            </Text>
          </View>

          <View style={GlobalStyle.RootContainer}>
            <Button
              color={colors.button.primary}
              label="Order Now"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: scaling(-40),
    paddingHorizontal: scaling(16),
    paddingTop: scaling(26),
    borderTopLeftRadius: scaling(24),
    borderTopRightRadius: scaling(24),
    backgroundColor: colors.white,
  },
  mainContent: {gap: scaling(16), flex: 1},
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    position: 'absolute',
    width: scaling(40),
    height: scaling(40),
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10,
    zIndex: 99,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaling(14),
  },
});

export default DetailScreen;

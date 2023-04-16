import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OrderEmptyImg} from 'assets';
import {Button} from 'components';
import React from 'react';
import {Text, View} from 'react-native';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import styles from './style';

const EmptyOrder = () => {
  const navigation =
    useNavigation<NativeStackScreenProps<ParamListBase>['navigation']>();

  return (
    <View style={GlobalStyle.RootContainer}>
      <View style={styles.container}>
        <OrderEmptyImg />
        <View>
          <Text style={styles.title}>Ouch! Hungry</Text>
          <Text style={styles.subtitle}>
            Seems like you have not ordered any food yet
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            label="Find Foods"
            color={colors.primary}
            onPress={() => {
              navigation.replace('TabStackScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EmptyOrder;

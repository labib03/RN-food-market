import React from 'react';
import {Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {SignUpSuccessImg} from 'assets';
import {Button} from 'components';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';
import styles from './style';

const SignUpSuccess = () => {
  const navigation =
    useNavigation<NativeStackScreenProps<ParamListBase>['navigation']>();

  return (
    <View style={GlobalStyle.RootContainer}>
      <View style={styles.container}>
        <SignUpSuccessImg />
        <View>
          <Text style={styles.title}>Yeay! Completed</Text>
          <Text style={styles.subtitle}>
            Now you are able to order some foods as a self reward
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

export default SignUpSuccess;

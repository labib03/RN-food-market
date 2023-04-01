import React from 'react';
import {View, Text} from 'react-native';
import {SignUpSuccessImg} from 'assets';
import {Button} from 'components';
import colors from 'utils/styles/colors';
import GlobalStyle from 'utils/styles/global_styles';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/*';

const SignUpSuccess = () => {
  const {navigation} =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, 'SignUpSuccess'>
    >();
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
            color={colors.secondary}
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

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SplashScreenLogo} from '../../assets';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/*';

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.wrapper}>
      <StatusBar hidden />
      <SplashScreenLogo />
      <Text style={styles.text}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

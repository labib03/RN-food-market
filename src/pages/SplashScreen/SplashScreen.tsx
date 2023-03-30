import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SplashScreenLogo} from '../../assets';
import styles from './styles';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar hidden />
      <SplashScreenLogo />
      <Text style={styles.text}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SplashScreenLogo} from '../../assets';
import styles from './styles';
import {RootStackParamList} from 'router/*';
import colors from 'theme/styles/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('TabStackScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={colors.primary} />
      <SplashScreenLogo />
      <Text style={styles.text}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

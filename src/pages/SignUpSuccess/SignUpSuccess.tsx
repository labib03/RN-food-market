import React from 'react';
import {View, Text} from 'react-native';
import {SignUpSuccessImg} from 'assets';
import {Button} from 'components';
import styles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/*';
import colors from 'theme/styles/colors';
import GlobalStyle from 'theme/styles/global_styles';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpSuccess'>;

const SignUpSuccess: React.FC<Props> = ({navigation}) => {
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

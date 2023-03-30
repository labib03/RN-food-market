import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './style';
import {Button, Header, TextInput} from 'components';
import colors from 'utils/styles/colors';
import {RootStackParamList} from 'router/*';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View style={styles.wrapper}>
        <TextInput label="email address" />
        <TextInput label="password" />
        <View style={styles.buttonWrapper}>
          <Button
            label="Sign In"
            color={colors.button.primary}
            onPress={() => {}}
          />
          <Button
            label="Create New Account"
            color={colors.button.secondary}
            isSecondary
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

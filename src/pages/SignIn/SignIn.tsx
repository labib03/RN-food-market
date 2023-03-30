import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {Button, Header, TextInput} from 'components';
import colors from 'utils/styles/colors';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View style={styles.wrapper}>
        <TextInput label="email address" />
        <TextInput label="password" />
        <View style={styles.buttonWrapper}>
          <Button label="Sign In" color={colors.button.primary} />
          <Button
            label="Create New Account"
            color={colors.button.secondary}
            isSecondary
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

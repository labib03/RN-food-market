import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import GlobalStyle from 'theme/styles/global_styles';
import {Button, Header, Select, TextInput} from 'components';
import styles from './style';
import {RootStackParamList} from 'router/*';
import colors from 'theme/styles/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpAddress'>;

const SignUpAddress: React.FC<Props> = ({navigation}) => {
  return (
    <View style={GlobalStyle.RootContainer}>
      <Header
        title="Address"
        subtitle="Make sure it's valid"
        isRenderBackButton
      />
      <View style={GlobalStyle.RootWrapper}>
        <TextInput label="phone no." />
        <TextInput label="address" />
        <TextInput label="house no." />
        <Select label="city" />
        <View style={styles.buttonWrapper}>
          <Button
            label="Sign Up Now"
            color={colors.button.primary}
            onPress={() => {
              navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpAddress;

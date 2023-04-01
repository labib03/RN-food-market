import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Header, TextInput} from 'components';
import styles from './style';
import {RootStackParamList} from 'router/*';
import colors from 'theme/styles/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Sign Up" subtitle="Register and Eat" isCanBack />
      <View style={styles.wrapper}>
        <View style={styles.photoContainer}>
          <View style={styles.photoBorder}>
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoText}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="full name" />
        <TextInput label="email address" />
        <TextInput label="password" />
        <View style={styles.buttonWrapper}>
          <Button
            label="Continue"
            color={colors.button.primary}
            onPress={() => navigation.navigate('SignUpAddress')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

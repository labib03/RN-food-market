import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {BackIcon} from 'assets';
import scaling from 'config/scaling';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'router/*';
import {useNavigation} from '@react-navigation/native';
import colors from 'theme/styles/colors';

type Props = {
  title: string;
  subtitle: string;
  isCanBack?: boolean;
};

const Header: React.FC<Props> = ({title, subtitle, isCanBack}) => {
  const navigation =
    useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
  return (
    <View style={styles.container}>
      <View>
        {isCanBack && (
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <BackIcon color={colors.secondary} />
          </Pressable>
        )}
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: scaling(30),
    paddingHorizontal: scaling(24),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaling(12),
  },
  title: {
    color: colors.text.primary,
    fontSize: scaling(22),
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: scaling(14),
    fontFamily: 'Poppins-Light',
  },
  back: {
    padding: scaling(10),
    marginLeft: scaling(-10),
  },
});

export default Header;

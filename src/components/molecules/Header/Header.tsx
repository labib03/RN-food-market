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
  isRenderBackButton?: boolean;
  isRenderImage?: boolean;
};

const Header: React.FC<Props> = ({
  title,
  subtitle,
  isRenderBackButton,
  isRenderImage,
}) => {
  const navigation =
    useNavigation<NativeStackScreenProps<RootStackParamList>['navigation']>();
  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        {isRenderBackButton && (
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <BackIcon color={colors.secondary} />
          </Pressable>
        )}

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      {isRenderImage && <View style={styles.image} />}
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
    justifyContent: 'space-between',
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaling(12),
  },
  title: {
    color: colors.text.primary,
    fontSize: scaling(22),
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.2,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: scaling(14),
    fontFamily: 'Poppins-Light',
    letterSpacing: 0.7,
  },
  back: {
    padding: scaling(10),
    marginLeft: scaling(-10),
  },
  image: {
    width: scaling(50),
    height: scaling(50),
    backgroundColor: colors.primary,
    opacity: 0.6,
    borderRadius: scaling(8),
  },
});

export default Header;

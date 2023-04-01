import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import scaling from 'config/scaling';
import colors from 'theme/styles/colors';

type Props = {
  color: string | undefined;
  label: string | undefined;
  isSecondary?: boolean;
  onPress: () => void;
};

const Button: React.FC<Props> = props => {
  const {color, label, isSecondary, onPress} = props;
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: !pressed
            ? color
            : isSecondary
            ? colors.black
            : colors.button.pressed,
        },
        styles.button,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          isSecondary ? styles.textSecondary : styles.textPrimary,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: scaling(10),
    borderRadius: scaling(10),
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaling(14),
    letterSpacing: 0.5,
  },
  textPrimary: {
    color: colors.black,
  },
  textSecondary: {
    color: colors.white,
  },
});

export default Button;

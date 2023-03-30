import {View, Text, TextInput as TI, StyleSheet} from 'react-native';
import React from 'react';
import scaling from '../../../config/scaling';
import {capitalizeEachFirstWorld} from 'utils/helpers/common';

type Props = {
  label: string;
};

const TextInput: React.FC<Props> = props => {
  const {label} = props;
  return (
    <View>
      <Text style={styles.label}>{capitalizeEachFirstWorld(label)}</Text>
      <TI style={styles.textInput} placeholder={`type your ${label} ...`} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: scaling(16),
    letterSpacing: 0.5,
    marginBottom: scaling(4),
  },
  textInput: {
    borderWidth: 0.4,
    borderColor: '#020202',
    padding: scaling(10),
    borderRadius: scaling(13),
    fontSize: scaling(13),
    letterSpacing: 0.6,
  },
});

export default TextInput;

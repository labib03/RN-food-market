import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import scaling from '../../../config/scaling';

type Props = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Props> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: scaling(30),
    paddingHorizontal: scaling(24),
  },
  title: {
    color: '#020202',
    fontSize: scaling(22),
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    color: '#8D92A3',
    fontSize: scaling(14),
    fontFamily: 'Poppins-Light',
  },
});

export default Header;

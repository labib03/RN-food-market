import scaling from 'config/scaling';
import {StyleSheet} from 'react-native';
import colors from './colors';

const GlobalStyle = StyleSheet.create({
  RootContainer: {
    flex: 1,
  },
  RootWrapper: {
    flex: 1,
    gap: scaling(16),
    backgroundColor: colors.white,
    marginTop: scaling(20),
    paddingVertical: scaling(22),
    paddingHorizontal: scaling(24),
  },
  Medium: {
    fontFamily: 'Poppins-Medium',
  },
  Reguler: {
    fontFamily: 'Poppins-Reguler',
  },
  Light: {
    fontFamily: 'Poppins-Light',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default GlobalStyle;

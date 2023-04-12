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
    fontFamily: 'Poppins-Regular',
  },
  Light: {
    fontFamily: 'Poppins-Light',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
  heading_2_primary: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: scaling(18),
  },
  heading_3_primary: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: scaling(16),
  },
  heading_4_primary: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: scaling(14),
  },
  heading_4_secondary: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontSize: scaling(14),
  },
  heading_5_primary: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: scaling(13),
  },
  heading_5_secondary: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontSize: scaling(13),
  },
});

export default GlobalStyle;

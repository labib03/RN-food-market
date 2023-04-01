import {StyleSheet} from 'react-native';
import scaling from '../../config/scaling';
import colors from 'theme/styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    flex: scaling(1),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scaling(32),
    color: '#020202',
    marginTop: scaling(38),
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import scaling from '../../config/scaling';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFC700',
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

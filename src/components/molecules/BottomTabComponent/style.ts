import scaling from 'config/scaling';
import {StyleSheet} from 'react-native';
import colors from 'theme/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scaling(16),
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
});

export default styles;

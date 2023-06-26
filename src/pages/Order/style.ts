import scaling from 'config/scaling';
import {StyleSheet} from 'react-native';
import colors from 'theme/styles/colors';

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: scaling(24)},
  wrapper: {
    backgroundColor: colors.white,
    gap: scaling(24),
    paddingVertical: scaling(18),
    paddingHorizontal: scaling(24),
  },
});

export default styles;

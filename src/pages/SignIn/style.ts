import {StyleSheet} from 'react-native';
import scaling from '../../config/scaling';
import colors from 'utils/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    gap: scaling(20),
    backgroundColor: colors.white,
    marginTop: scaling(20),
    paddingVertical: scaling(26),
    paddingHorizontal: scaling(24),
  },
  buttonWrapper: {
    marginTop: scaling(24),
    gap: scaling(14),
  },
});

export default styles;

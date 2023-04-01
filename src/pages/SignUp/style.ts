import colors from 'theme/styles/colors';
import scaling from 'config/scaling';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    gap: scaling(16),
    backgroundColor: colors.white,
    marginTop: scaling(20),
    paddingVertical: scaling(22),
    paddingHorizontal: scaling(24),
  },
  buttonWrapper: {
    marginTop: scaling(18),
    gap: scaling(14),
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: scaling(5),
  },
  photoBorder: {
    borderWidth: 1,
    borderRadius: scaling(110),
    padding: scaling(10),
    borderStyle: 'dashed',
  },
  photoPlaceholder: {
    width: scaling(100),
    height: scaling(100),
    borderRadius: scaling(110),
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    width: scaling(50),
    fontSize: scaling(14),
    fontFamily: 'Poppins-Light',
    lineHeight: scaling(21),
    textAlign: 'center',
  },
});

export default styles;

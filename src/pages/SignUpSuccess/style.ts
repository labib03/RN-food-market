import scaling from 'config/scaling';
import {StyleSheet} from 'react-native';
import colors from 'utils/styles/colors';
import GlobalStyle from 'utils/styles/global_styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaling(70),
    gap: scaling(20),
  },
  title: {
    fontSize: scaling(20),
    color: colors.black,
    textAlign: 'center',
    ...GlobalStyle.Medium,
  },
  subtitle: {
    fontSize: scaling(14),
    textAlign: 'center',
    ...GlobalStyle.Light,
  },
  buttonWrapper: {
    width: '100%',
  },
});

export default styles;

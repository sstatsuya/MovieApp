import {StyleSheet} from 'react-native';
import {Styles} from '../../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 116,
    height: 50,
    position: 'relative',
    marginRight: 24,
  },
  categoryImg: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    borderRadius: 12,
    opacity: 0.5,
  },
  textWrapper: {
    position: 'absolute',
    width: 116,
    height: 50,
    ...Styles.flexCenter,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

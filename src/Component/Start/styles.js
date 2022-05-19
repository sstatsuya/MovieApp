import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorPrimary,
    ...Styles.flexCenter,
    justifyContent: 'flex-start',
  },
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -2,
  },
  overlay:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      zIndex: -1,
  },
  titleWrapper: {
    width: '100%',
    ...Styles.flexCenter
  },
  titleImg:{
      width: 240,
      height: 240,
      resizeMode: 'contain',
      zIndex: 3,
  },
  title:{
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: 24,
      zIndex: 3,
  },
  btn:{
      position: 'absolute',
      bottom: 36,
  }
});

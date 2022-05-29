import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    marginHorizontal: 12
  },
  movieImg:{
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 24
  },
  name:{
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 12,
      paddingLeft: 2
  },
  starWrapper:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },
  rate:{
      color: Colors.colorGold,
      marginLeft: 12,
      fontWeight: 'bold',
      fontSize: 14
  }
});

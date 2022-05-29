import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 16,
  },
  movieImg:{
      width: '100%',
      height: 160,
      resizeMode: 'cover',
      borderRadius: 24
  },
  name:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 12,
      paddingLeft: 2
  },
  starWrapper:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4
  },
  rate:{
      color: Colors.colorGold,
      marginLeft: 12,
      fontWeight: 'bold',
      fontSize: 16
  }
});

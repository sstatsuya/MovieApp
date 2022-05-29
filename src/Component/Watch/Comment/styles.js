import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 16
  },
  user:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar:{
    width: 40,
    height: 40,
    borderRadius: 180
  },
  name:{
    color: 'white',
    fontSize: 16,
    marginLeft: 12
  },
  date:{
    color: '#999',
    marginVertical: 4
  },
  content:{
    color: '#999'
  }
});

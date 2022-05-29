import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorPrimary,
  },
  section: {
    width: '100%',
    paddingHorizontal: 12,
    marginVertical: 12
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  info:{
    color: '#999',
    marginTop: 8
  },
  sectionTitle:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  desc:{
    color: '#666',
    lineHeight: 20,
  },
  commentInput:{
    height: 80,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    color: 'white',
    borderRadius: 12,
    padding: 12,
  }
});

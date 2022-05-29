import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Styles} from '../../Constant/Styles';

export const styles = StyleSheet.create({
  svWrapper: {
    flex: 1,
    backgroundColor: Colors.colorPrimary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  movieImg: {
    width: '100%',
    height: Dimensions.get('window').height / 2.2,
    resizeMode: 'cover',
    opacity: 0.6,
  },
  movieNameWrapper: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
  },
  name: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: '#666',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },
  category: {
    color: '#ccc',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },
  watchBtn: {
    width: '90%',
    paddingVertical: 12,
    backgroundColor: Colors.colorPurple,
    marginVertical: 24,
    borderRadius: 24,
    ...Styles.flexCenter,
  },
  watchBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  controlWrapper: {
    width: '60%',
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlBtn: {
    backgroundColor: Colors.colorPrimaryLight,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  sectionWrapper: {
    width: '90%',
    marginBottom: 24,
    backgroundColor: Colors.colorPrimaryDark,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  rateItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  rateItemLeft: {
    flex: 5,
    color: '#999',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateItemRight: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 4,
  },
  info: {
    marginTop: 4,
    color: '#999',
  },
  sectionItem: {
    marginVertical: 12,
  },
  sectionItemTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#999',
  },
  persons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  person: {
    backgroundColor: Colors.colorPrimaryLight,
    borderRadius: 20,
    padding: 12,
    marginRight: 8,
    marginVertical: 4
  },
  personName: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

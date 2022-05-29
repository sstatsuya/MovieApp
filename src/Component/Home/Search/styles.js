import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Styles.flexCenter,
    justifyContent: 'flex-start',
    backgroundColor: Colors.colorPrimary,
  },
  searchWrapper: {
    marginTop: 24,
    width: '90%',
    ...Styles.flexCenter,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    ...Styles.whiteBorder,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  searchInput: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  historyTitle: {
    marginTop: 16,
    fontSize: 16,
    color: '#999',
    alignSelf: 'flex-start',
    paddingHorizontal: '5%',
    fontWeight: 'bold',
  },
  history: {
    width: '90%',
    display: 'flex',
    marginTop: 8,
  },
  historyItem: {
    paddingVertical: 8,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: '#333',
  },
  historyText: {
    fontSize: 16,
    color: 'white',
  },
  searchedMovie: {
    display: 'flex',
    flexDirection: 'column',
    width: '96%',
    marginTop: 8
  },
  searchedMovieItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    height: 120,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: '#333',
  },
  searchedMovieBanner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchedMovieImg: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
    height: '100%',
  },
  year: {
    fontSize: 12,
    marginTop: 4,
    color: 'white',
  },
  searchedMovieDesc: {
    flex: 3,
    paddingHorizontal: 4,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 4,
    fontSize: 12,
    color: 'white',
    lineHeight: 18,
  },
});

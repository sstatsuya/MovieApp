import {StyleSheet} from 'react-native';
import {Colors, Styles} from '../../Constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Styles.flexCenter,
    justifyContent: 'flex-start',
    backgroundColor: Colors.colorPrimary,
  },
  titleText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
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
  homeContent: {
    marginTop: 36,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentTitle: {
    marginBottom: 12,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.colorGrayTitle,
  },
  swiperWrapper: {
    width: '100%',
    height: 180,
    backgroundColor: 'pink',
  },
  bannerImg: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});

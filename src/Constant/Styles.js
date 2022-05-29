export const Colors = {
  colorPrimary: '#200F37',
  colorPurple: '#6644B8',
  colorPrimaryDark: '#312846',
  colorPrimaryLight: '#433662',
  colorGrayTitle: '#999',
  colorGold: '#f7d930'
};

export const Styles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 320,
    height: 64,
    backgroundColor: Colors.colorPurple,
    borderRadius: 20,
    zIndex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputWrapper: {
    width: '90%',
    height: 54,
    borderRadius: 32,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: '80%',
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  whiteBorder:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white'
  }
};

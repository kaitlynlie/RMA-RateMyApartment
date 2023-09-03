import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    textAlignVertical: 'center',
  },
  blob: {
    position: 'absolute',
    width: 500,
    height: 500,
    left: -200,
    top: -210
  },
  blobbot: {
    position: 'absolute',
    width: 500,
    height: 700,
    top: 400,
    left: 60
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    top: 100,
  },
  welcomeMessage: {
    marginTop: 100,
    fontWeight:'bold', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 28,
    bottom: -12,
  },
  // userName: {
  //   fontFamily: FONT.regular,
  //   fontSize: SIZES.large,
  //   color: COLORS.secondary,
  // },
  emailInput: {
    marginTop: 40,
    paddingBottom: 60,
    textAlignVertical: "top",
    lineHeight: 21,
    zIndex: 10,
    color: 'black',
    fontSize: 16,
  },
  emailunderline: {
    marginTop: -50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 70,
  },
  pwunderline: {
    marginTop: -32,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
  passwordInput: {
    marginTop: -30,
    paddingBottom: 42,
    fontSize: 16,
  },
  button: {
    alignSelf: 'center', 
    textAlign: 'center', 
  },
  newMsg: {
    fontSize: 12, 
    textDecorationLine: 'underline',
    alignSelf: 'center', 
    textAlign: 'center', 
  },
  searchBtn: {
    backgroundColor: "#FFD210",
    borderRadius: 16,
    marginTop: 40,
  },
  nextBtn: {
    fontWeight:'bold', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 18, 
    backgroundColor: "#FFD210", 
    borderWidth: 2,
    borderColor: "#312651", 
    width:100, 
    height:28, 
    borderRadius: 15, 
    overflow: 'hidden',
  },
  bottomContainer: {
    bottom: -20,
},
});

export default styles;

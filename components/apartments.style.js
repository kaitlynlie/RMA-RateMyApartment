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
  welcomeMessage: {
    marginTop: 100,
    fontWeight:'bold', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 28,
    bottom: -12,
  },

});

export default styles;

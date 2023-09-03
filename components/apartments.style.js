import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  searchBtn: {
    backgroundColor: "#FFD210",
    borderRadius: 16,

  },
  nextBtn: {
    fontWeight:'bold', 
    alignSelf: 'center', 
    textAlign: 'center', 
    fontSize: 18, 
    backgroundColor: "#FFD210", 
    borderWidth: 2,
    borderColor: "#312651", 
    width:150, 
    height:28, 
    borderRadius: 15, 
    overflow: 'hidden',
  },
});

export default styles;

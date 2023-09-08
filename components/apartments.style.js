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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  nextBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: "#FFD210",
    width: 150,
    height: 28,
    borderRadius: 15,
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 28,
  },
  reviewBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: "#FFD210",
    width: 100,
    height: 28,
    borderRadius: 15,
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 28, 
  }
});

export default styles;

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 14,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 60
      },
  searchBtn: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#FFD210",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  nextBtn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewBox: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 16,
    padding: 10,
    width: 400,
    marginBottom: 10,
  },
});

export default styles;

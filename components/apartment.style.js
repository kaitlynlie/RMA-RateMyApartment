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
        height: 80
      },
  searchBtn: {
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
});

export default styles;

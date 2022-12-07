import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

export default SubTitle;

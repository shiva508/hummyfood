import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{duration}m</Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
export default MealDetails;

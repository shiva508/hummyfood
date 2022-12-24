import { Image, StyleSheet, Text, View } from "react-native";

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>User Details</Text>
      <Image source={{}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212529",
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 15,
    color: "white",
  },
});
export default UserDetails;

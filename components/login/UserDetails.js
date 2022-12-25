import { Image, StyleSheet, Text, View } from "react-native";

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/555.jpg")}
        ></Image>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentUserNameText}>Shiva Dasari</Text>
        <Text style={styles.contentText}>dasarishiva1@gmail.com</Text>
        <Text style={styles.contentText}>9493366706</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#212529",
  },
  textStyle: {
    fontSize: 15,
    color: "white",
  },
  imageContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
  },
  contentText: {
    fontWeight: "bold",
    color: "white",
  },
  contentUserNameText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default UserDetails;

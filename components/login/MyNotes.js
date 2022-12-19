import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyNotes = ({ noteNum }) => {
  const navigation = useNavigation();
  const notesDtlsNavHandler = () => {
    navigation.navigate("myNotesDetails");
  };
  return (
    <View style={styles.notesContainer}>
      <Pressable onPress={notesDtlsNavHandler}>
        <Text style={styles.contentText}>My Pictures {noteNum}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  notesContainer: {
    backgroundColor: "#212529",
    margin: 1,
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#66d9e8",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  contentText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default MyNotes;

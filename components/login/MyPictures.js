import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MyNotes from "./MyNotes";

const MyPictures = ({ route, navigation }) => {
  const NOTES_DATA = [1, 4, 9, 16];
  return (
    <View>
      <FlatList
        data={NOTES_DATA}
        renderItem={(itemData) => <MyNotes noteNum={itemData.item} />}
        keyExtractor={(item) => item}
      ></FlatList>
    </View>
  );
};
export default MyPictures;

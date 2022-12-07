import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
const UserIconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={name} size={size} color={color} />
    </Pressable>
  );
};
export default UserIconButton;

import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedstyle}
    >
      <Ionicons name={name} color={color} size={size}></Ionicons>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressedstyle: {
    opacity: 0.7,
  },
});
export default IconButton;

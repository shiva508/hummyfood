import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./LoginScreen";
import Studenttpool from "./Studenttpool";
import UserDetails from "./UserDetails";

const BottomTab = createBottomTabNavigator();
const Welcome = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Welcome to Hummy foods</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
  },
});
export default Welcome;

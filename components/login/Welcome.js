import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./LoginScreen";
import Studenttpool from "./Studenttpool";
import UserDetails from "./UserDetails";

const Drawer = createDrawerNavigator();
const Welcome = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Welcome to Hummy foods</Text>
      <NavigationContainer>
        <Drawer.Screen
          name="studenttpool"
          component={Studenttpool}
        ></Drawer.Screen>
        <Drawer.Screen
          name="loginScreen"
          component={LoginScreen}
        ></Drawer.Screen>
        <Drawer.Screen
          name="userDetails"
          component={UserDetails}
        ></Drawer.Screen>
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
  },
});
export default Welcome;

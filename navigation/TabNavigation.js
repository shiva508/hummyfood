import { StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../components/login/LoginScreen";
import Studenttpool from "../components/login/Studenttpool";
import UserDetails from "../components/login/UserDetails";
import { MaterialIcons } from "@expo/vector-icons";
import FavorateMealScreen from "../screens/FavorateMealScreen";
const ButtonTab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <ButtonTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#212529" },
        tabBarStyle: styles.container,
        lazy: true,
      }}
    >
      <ButtonTab.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "LogIn",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
          fontWeight: "bold",
          headerTitleAlign: "left",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#868e96",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="google" size={size} color={color} />;
          },
        }}
      ></ButtonTab.Screen>
      <ButtonTab.Screen
        name="studentpool"
        component={Studenttpool}
        options={{
          title: "Student Pool",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
          fontWeight: "bold",
          headerTitleAlign: "left",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#868e96",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="users" size={size} color={color} />;
          },
        }}
      ></ButtonTab.Screen>
      <ButtonTab.Screen
        name="userdetails"
        component={UserDetails}
        options={{
          title: "Account",
          headerTitleAlign: "left",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#868e96",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="user" size={size} color={color} />;
          },
        }}
      ></ButtonTab.Screen>
      <ButtonTab.Screen
        name="stackNavigation"
        component={StackNavigation}
        options={{
          headerShown: false,
          title: "Pictures",
          headerTitleAlign: "left",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#868e96",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="images" size={size} color={color} />;
          },
        }}
      ></ButtonTab.Screen>
      <ButtonTab.Screen
        name="favorateMealScreen"
        component={FavorateMealScreen}
        options={{
          title: "Favorite",
          headerTitleAlign: "left",
          headerTitleStyle: { fontWeight: "bold", color: "white" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#868e96",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="favorite" size={size} color={color} />;
          },
        }}
      ></ButtonTab.Screen>
    </ButtonTab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212529",
    fontWeight: "bold",
  },
});
export default TabNavigation;

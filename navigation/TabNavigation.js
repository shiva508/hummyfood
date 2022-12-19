import { StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategory"
          screenOptions={
            {
              //headerStyle: { backgroundColor: "#351401" },
              //headerTintColor: "white",
              //contentStyle: { backgroundColor: "#3f2f25" },
            }
          }
        >
          <Stack.Screen
            name="MealsCategory"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
            // options={({ route, navigation }) => {
            //   console.log(route);
            //   const categoryId = route.params.categoryId;
            //   const catObj = CATEGORIES.filter(
            //     (data) => data.id === categoryId
            //   );
            //   console.log(catObj);
            //   if (catObj) {
            //     return catObj.title;
            //   } else {
            //     return "Meals Overview";
            //   }
            //}}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            options={{
              title: "Meal Over View",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="mealDetails"
            component={MealDetailsScreen}
            options={{
              title: "Meal Details",
              // headerRight: () => {
              //   return <Text style={{ color: "red" }}>Hey I'm</Text>;
              //   return <Button title="Hey!" ></Button>;
              // },
            }}
          ></Stack.Screen>
          {/* <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{
              title: "Welcome",
            }}
          ></Stack.Screen> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import MealsOverViewScreen from "../screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
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
    </Stack.Navigator>
  );
};
export default StackNavigation;

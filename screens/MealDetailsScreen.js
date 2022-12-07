import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import List from "../components/mealdetails/List";
import SubTitle from "../components/mealdetails/SubTitle";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((data) => data.id === mealId);
  const buttonPressHandler = () => {
    console.log("Hey!");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            size={28}
            onPress={buttonPressHandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, buttonPressHandler]);
  return (
    <View style={{ marginBottom: 32 }}>
      <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetails
        duration={mealData.duration}
        complexity={mealData.complexity}
        affordability={mealData.affordability}
      />

      <ScrollView style={styles.scrollContentMarginBotton}>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List data={mealData.ingredients}></List>
            <SubTitle>Steps</SubTitle>
            <List data={mealData.steps}></List>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContentMarginBotton: {
    marginBottom: 32,
    maxHeight: 300,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
export default MealDetailsScreen;

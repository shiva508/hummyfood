import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/FavoriteContext";
const FavorateMealScreen = () => {
  const favoriteContext = useContext(FavoriteContext);
  const favoriteContextIds = favoriteContext.ids;

  const favorateMeals = MEALS.filter((data) => {
    return favoriteContextIds.includes(data.id);
  });

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealsItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealsItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={favorateMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default FavorateMealScreen;

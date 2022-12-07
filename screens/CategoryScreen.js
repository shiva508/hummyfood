import { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import UserIconButton from "../components/login/UserIconButton";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = ({ navigation }) => {
  const loginNavigationHandler = () => {
    navigation.navigate("welcome");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <UserIconButton
            name="user"
            size={24}
            onPress={loginNavigationHandler}
          ></UserIconButton>
        );
      },
    });
  });
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategoryScreen;

import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";
import MealList from "../components/MealList";
import { useLinkProps } from "@react-navigation/native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ route, navigation: { navigate, goBack } }) => {
  const { categoryId } = route.params;
  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filters!</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigate={navigate} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { categoryId } = navigationData.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

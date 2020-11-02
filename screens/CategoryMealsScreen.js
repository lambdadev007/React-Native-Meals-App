import React from "react";
import { CATEGORIES, MEALS } from "../Data/dummy-data";
import MealList from '../components/MealList';
import { useLinkProps } from "@react-navigation/native";

const CategoryMealsScreen = ({ route, navigation: { navigate, goBack } }) => {

  const { categoryId } = route.params;
  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return <MealList listData={displayedMeals} navigate={navigate} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { categoryId } = navigationData.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

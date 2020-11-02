import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../Data/dummy-data";

const FavoriteScreen = ({ route, navigation: { navigate, goBack } }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigate={navigate} />;
};

FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoriteScreen;

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../Data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ route, navigation: { navigate, goBack } }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigate('MealDetail', {
            mealId: itemData.item.id
          })
        }}
      />
    );
  };
  const { categoryId } = route.params;
  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { categoryId } = navigationData.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  text: {
    marginBottom: 20,
  },
});

export default CategoryMealsScreen;

import React from "react";
import { Platform, View, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import FiltersScreen from "../screens/FiltersScreen";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";

const Stack = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? Colors.primaryColor : "#ff0000",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={CategoriesScreen.navigationOptions}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreen.navigationOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={FavoriteScreen.navigationOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={FiltersScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Meals") {
            iconName = "ios-restaurant";
          } else if (route.name === "Favorite") {
            iconName = "ios-star";
          }

          return <Ionicons name={iconName} size={23} color={color} />;
        },
        tabBarColor: Colors.primaryColor,
        //   tabBarLabel: ({ focused, color }) => {
        //     let title;

        //     if (route.name === "Meals") {
        //       title = (
        //         <View>
        //           <Text style={{ color: color }}>Meals!</Text>
        //         </View>
        //       );
        //     } else if (route.name === "Favorite") {
        //       title = (
        //         <View>
        //           <Text style={{ color: color }}>Favorite!</Text>
        //         </View>
        //       );
        //     }

        //     return title;
        //   },
      })}
      shifting={true}
      labeled={true}
      activeColor={Colors.accentColor}
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        inactiveTintColor: "#000",
      }}
    >
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorite" component={FavNavigator} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      >
        <Drawer.Screen
          name="MealFavs"
          component={MealFavTabNavigator}
          options={{
            drawerLabel: "Meals",
          }}
        />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

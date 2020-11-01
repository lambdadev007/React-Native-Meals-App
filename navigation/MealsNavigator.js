import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../Constants/Colors';

const Stack = createStackNavigator();

const MealsNavigator = () => {
    const defaultOptions = {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ff0000'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
             screenOptions={defaultOptions}
            >
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
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;
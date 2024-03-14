import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import Browser from "../screens/Browser/Browser";
import styles from "./styles";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        sceneContainerStyle: {
          backgroundColor: "#F8B0AD",
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#F1635C",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
          paddingTop: 5,
          color: "#fff",
        },
        cardStyle: { backgroundColor: "#F8B0AD" },
      }}
    >
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="RecipesList" component={RecipesListScreen} />
      <Stack.Screen name="Ingredient" component={IngredientScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="IngredientsDetails" component={IngredientsDetailsScreen} />
      <Stack.Screen name="Browser" component={Browser} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      style={styles.viewContainer}
      drawerPosition="left"
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#F8B0AD",
          fontWeight: "bold",
        },
        drawerLabelStyle : { fontSize: 10, color: "red" },
      }}
      drawerContent={({ navigation }) => <DrawerContainer style={styles.container} navigation={navigation} />}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer style={styles.viewContainer}>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;

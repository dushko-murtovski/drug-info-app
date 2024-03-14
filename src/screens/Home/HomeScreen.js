import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  // const onPressRecipe = (item) => {
  //   navigation.navigate("Recipe", { item });
  // };

  // const renderRecipes = ({ item }) => (
  //   <TouchableHighlight underlayColor="rgba(248, 176, 173,0.9)" onPress={() => onPressRecipe(item)}>
  //     <View style={styles.container}>
  //       <Image style={styles.photo} source={{ uri: item.photo_url }} />
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
  //     </View>
  //   </TouchableHighlight>
  // );
  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(248, 176, 173,0.9)" onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={item.photo_url} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} drugs</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.viewContainer}>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
    </View>
    // <View style={styles.containerColor}>
    //   <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    // </View>
  );
}

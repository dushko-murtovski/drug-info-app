import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 120;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#F8B0AD',
  },
  categoriesItemContainer: {
    // flex: 1,
    // margin: 10,
    // paddingLeft: 50,
    // paddingRight: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 215,
    // borderColor: '#cccccc',
    // borderWidth: 0.5,
    // borderRadius: 20,
    // backgroundColor: '#F58984',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 25,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    color: '#F8B0AD',
    backgroundColor: '#F58984',
  },
  categoriesPhoto: {
    width: '90%',
    height: 115,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 10,
    color: '#333333',
  }
});

export default styles;

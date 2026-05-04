import React, { useContext } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const FavoritesScreen = ({ navigation }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(
    RecipeContext
  );

  const handleRecipePress = (recipe) => {
    navigation.navigate('Detail', { recipeId: recipe.idMeal });
  };

  const handleFavoritePress = (recipe) => {
    if (isFavorite(recipe.idMeal)) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe);
    }
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>❤️</Text>
      <Text style={styles.emptyTitle}>Belum ada resep favorit</Text>
      <Text style={styles.emptySubtitle}>
        Tambahkan resep favorit dari halaman Home atau Search
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => handleRecipePress(item)}
            onFavorite={handleFavoritePress}
            isFavorite={isFavorite(item.idMeal)}
          />
        )}
        ListEmptyComponent={renderEmpty}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default FavoritesScreen;

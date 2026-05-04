import React, { useContext, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RecipeContext } from '../context/RecipeContext';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';

const { width } = Dimensions.get('window');

const DetailScreen = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const {
    detail,
    loading,
    error,
    getRecipeDetail,
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useContext(RecipeContext);

  useEffect(() => {
    getRecipeDetail(recipeId);
  }, [recipeId]);

  const handleFavorite = () => {
    if (detail) {
      if (isFavorite(detail.idMeal)) {
        removeFavorite(detail.idMeal);
      } else {
        addFavorite(detail);
      }
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => getRecipeDetail(recipeId)} />;
  }

  if (!detail) {
    return (
      <View style={styles.container}>
        <Text>Resep tidak ditemukan</Text>
      </View>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = detail[`strIngredient${i}`];
    const measure = detail[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: detail.strMealThumb }}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleFavorite}
        >
          <Icon
            name={isFavorite(detail.idMeal) ? 'favorite' : 'favorite-border'}
            size={28}
            color={isFavorite(detail.idMeal) ? '#ff6b6b' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{detail.strMeal}</Text>

        <View style={styles.info}>
          <Text style={styles.label}>Kategori: </Text>
          <Text style={styles.value}>{detail.strCategory}</Text>
        </View>

        {detail.strArea && (
          <View style={styles.info}>
            <Text style={styles.label}>Asal: </Text>
            <Text style={styles.value}>{detail.strArea}</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Bahan-Bahan</Text>
        <View style={styles.ingredientsList}>
          {ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Icon name="circle" size={8} color="#ff6b6b" />
              <Text style={styles.ingredientText}>
                {item.ingredient} - {item.measure}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Langkah-Langkah</Text>
        <Text style={styles.instructions}>
          {detail.strInstructions}
        </Text>

        {detail.strSource && (
          <TouchableOpacity style={styles.sourceButton}>
            <Icon name="open-in-new" size={18} color="#fff" />
            <Text style={styles.sourceButtonText}>Sumber Resep</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  info: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginTop: 20,
    marginBottom: 12,
  },
  ingredientsList: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ingredientText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#555',
  },
  instructions: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  sourceButton: {
    backgroundColor: '#ff6b6b',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  sourceButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default DetailScreen;

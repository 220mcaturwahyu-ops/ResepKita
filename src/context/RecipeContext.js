import React, { createContext, useReducer, useCallback } from 'react';
import { recipeReducer, initialState } from './RecipeReducer';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const fetchRecipes = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );
      const data = await response.json();
      dispatch({ type: 'SET_RECIPES', payload: data.meals || [] });
      dispatch({ type: 'SET_ERROR', payload: null });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const searchRecipes = useCallback(async (query) => {
    if (query.trim().length < 3) {
      dispatch({ type: 'SET_RECIPES', payload: [] });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      dispatch({ type: 'SET_RECIPES', payload: data.meals || [] });
      dispatch({ type: 'SET_ERROR', payload: null });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const getRecipeDetail = useCallback(async (id) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        dispatch({ type: 'SET_DETAIL', payload: data.meals[0] });
      }
      dispatch({ type: 'SET_ERROR', payload: null });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const addFavorite = useCallback((recipe) => {
    dispatch({ type: 'ADD_FAVORITE', payload: recipe });
  }, []);

  const removeFavorite = useCallback((recipeId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: recipeId });
  }, []);

  const isFavorite = useCallback((recipeId) => {
    return state.favorites.some(fav => fav.idMeal === recipeId);
  }, [state.favorites]);

  const value = {
    ...state,
    fetchRecipes,
    searchRecipes,
    getRecipeDetail,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};

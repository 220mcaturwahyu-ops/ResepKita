export const initialState = {
  recipes: [],
  favorites: [],
  detail: null,
  loading: false,
  error: null,
  searchQuery: '',
};

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };
    case 'SET_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          fav => fav.idMeal !== action.payload
        ),
      };
    case 'CLEAR_DETAIL':
      return {
        ...state,
        detail: null,
      };
    default:
      return state;
  }
};

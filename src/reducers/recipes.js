import {
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_QUERY,
  SORT_RECIPES,
  GET_RECIPES_FAIL
} from '../constants/index';

const initialState = {
  recipes: [],
  recipe: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
    case GET_RECIPE_BY_QUERY:
    case SORT_RECIPES:
      return { ...state, recipes: payload.recipes, loading: false };
    case GET_RECIPE_BY_ID:
      return { ...state, recipe: payload.recipe, loading: false };
    case GET_RECIPES_FAIL:
      return {
        ...state, recipes: [], recipe: null, loading: true
      };
    default:
      return state;
  }
};

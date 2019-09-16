import { GET_RECIPES, GET_RECIPE_BY_ID } from '../constants/index';

const initialState = {
  recipes: [],
  recipe: null,
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES:
      return { ...state, recipes: payload.recipes, loading: false };
    case GET_RECIPE_BY_ID:
      return { ...state, recipe: payload.recipe, loading: false };
    default:
      return state;
  }
};

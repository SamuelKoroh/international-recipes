import axios from 'axios';
import config from '../config/config';
import {
  GET_RECIPES,
  GET_RECIPES_FAIL,
  SORT_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE_BY_QUERY
} from '../constants';

export const getRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${config.BASE_URL}/search?key=${config.API_KEY}`);
    dispatch({ type: GET_RECIPES, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL });
  }
};

export const getRecipesByQuery = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.BASE_URL}/search?key=${config.API_KEY}&q=${query}`);
    dispatch({ type: GET_RECIPE_BY_QUERY, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL });
  }
};

export const sortRecipes = (rating) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.BASE_URL}/search?key=${config.API_KEY}&sort=${rating}`);
    dispatch({ type: SORT_RECIPES, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL });
  }
};


export const getRecipe = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${config.BASE_URL}/get?key=${config.API_KEY}&rId=${id}`);
    dispatch({ type: GET_RECIPE_BY_ID, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL });
  }
};

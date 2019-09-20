import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipes, sortRecipes, getRecipesByQuery } from '../actions/recipes';
import Spinner from './common/Spinner';
import Navbar from './layout/Navbar';

const Recipes = (props) => {
  const {
    getRecipes,
    loading,
    recipes,
    sortRecipes,
    getRecipesByQuery
  } = props;

  const [state, setQuery] = useState({
    query: null
  });

  useEffect(() => {
    getRecipes();
  }, [loading]);

  const { query } = state;
  const handleSelectedItemChange = ({ target }) => {
    sortRecipes(target.value);
  };

  const onInputChange = ({ target }) => setQuery({ ...state, query: target.value });
  const onSearch = () => {
    getRecipesByQuery(query);
  };
  return loading ? (<Spinner />) : (
    <Fragment>
      <Navbar />
      <div className="container">
        <h2 className="mx-auto text-center">Top Recipes</h2>
        <div className="row justify-content-center my-4">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button
                  className="btn search-control"
                  type="button"
                  id="button-addon1"
                  onClick={() => onSearch()}
                >
                  <i className="fa fa-search" />
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="search-control" htmlFor="rating">Sort By &gt; </label>
              </div>
              <select className="custom-select" id="rating" name="rating" onChange={(e) => handleSelectedItemChange(e)}>
                <option value="r">Top Rated</option>
                <option value="t">Trending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe.recipe_id} className="col-md-3 col-sm-6 col-xs-12 mb-4">
              <div className="card">
                <Link to={`/recipe-details/${recipe.recipe_id}`}>
                  <div>
                    <img src={recipe.image_url} className="img-fluid img-thumbnail" style={{ maxHeight: '171.34px', width: '100%' }} alt="..." />
                  </div>
                </Link>
                <span className="recipe-title m-2">{recipe.title}</span>
                <div className="publisher">
                  <div className="px-2">
                    <a href={recipe.source_url} target="_blank" rel="noopener noreferrer">{recipe.publisher}</a>
                    <span className="badge badge-danger pull-right">{Math.ceil(recipe.social_rank)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  sortRecipes: PropTypes.func.isRequired,
  getRecipesByQuery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
  loading: state.recipes.loading
});

export default connect(mapStateToProps, { getRecipes, sortRecipes, getRecipesByQuery })(Recipes);

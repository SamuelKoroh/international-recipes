import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe } from '../actions/recipes';
import Navbar from './layout/Navbar';
import Spinner from './common/Spinner';

const RecipeDetails = ({ match, getRecipe, recipe }) => {
  useEffect(() => {
    getRecipe(match.params.id);
  }, [getRecipe]);

  return !recipe ? (<Spinner />) : (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 recipe-details">
            <h2>{recipe.title}</h2>
            <div className="img">
              <img
                src={recipe.image_url}
                alt={recipe.title}
                style={{ width: '100%' }}
              />
            </div>
            <ul className="recipe-list">
              {recipe.ingredients.map((ingred) => (
                <li key={ingred}>{ingred}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

RecipeDetails.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipes.recipe,
  loading: state.recipes.loading
});

export default connect(mapStateToProps, { getRecipe })(RecipeDetails);

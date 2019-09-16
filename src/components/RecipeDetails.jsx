import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipe } from '../actions/recipes';

const RecipeDetails = ({ match, getRecipe, loading, recipe }) => {
  useEffect(() => {
    getRecipe(match.params.id);
  }, [getRecipe]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 recipe-details">
          <h2>{recipe && recipe.title}</h2>
          <div className="img">
            <img src={recipe && recipe.image_url} alt=".." />
          </div>
          <ul>
            {recipe && recipe.ingredients.map((ingred) => (
              <li key={ingred}>{ingred}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

RecipeDetails.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipes.recipe,
  loading: state.recipes.loading
});

export default connect(mapStateToProps, { getRecipe })(RecipeDetails);

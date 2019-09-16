import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipes } from '../actions/recipes';

const Recipes = ({ getRecipes, loading, recipes }) => {
  useEffect(() => {
    getRecipes();
  }, [loading]);

  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="col-md-3 col-sm-6 col-xs-12 mb-4">
            <div className="card">
              <Link to={`/recipe-details/${recipe.recipe_id}`}>
                <div>
                  <img src={recipe.image_url} className="img-fluid img-thumbnail" style={{ maxHeight: '171.34px', width: '100%' }} alt="..." />
                </div>
                <div>
                  <span>{recipe.title}</span>
                  <div>
                    <span>{recipe.publisher}</span>
                    <span className="badge badge-danger pull-right">{Math.ceil(recipe.social_rank)}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
  loading: state.recipes.loading
});

export default connect(mapStateToProps, { getRecipes })(Recipes);

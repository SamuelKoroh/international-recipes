import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Landing from './Landing';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import 'font-awesome/css/font-awesome.css';
import '../styles/app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipe-details/:id" exact component={RecipeDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

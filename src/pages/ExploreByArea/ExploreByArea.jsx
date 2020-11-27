import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipeCard from '../../components/RecipeCard';
import { getMealsAPI } from '../../services/API';
import './ExploreByArea.css';

const ExploreByArea = (props) => {
  const { location: { pathname } } = props;
  const {
    pageTitle,
    setLoading,
    mealsAreasList,
    setMealsAreasList,
    recipes,
    setRecipes,
  } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    getMealsAPI('', 'meals-areas-list').then((data) => {
      setMealsAreasList(data);
      setLoading(false);
    });
    getMealsAPI().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, [pageTitle]);

  function renderOptions() {
    return mealsAreasList.map(({ strArea }) => (
      <option data-testid={ `${strArea}-option` } key={ strArea }>{strArea}</option>
    ));
  }

  function renderAreaCards() {
    if (mealsAreasList) {
      return (
        <select
          data-testid="explore-by-area-dropdown"
        >
          <option data-testid="All-option">All</option>
          { renderOptions() }
        </select>
      );
    }
    return undefined;
  }

  function renderRecipes() {
    const MAX_CARDS = 11;
    return recipes ? (
      recipes.map((recipe, index) => {
        while (index <= MAX_CARDS) {
          return (
            <RecipeCard
              key={ recipe.idMeal }
              recipe={ recipe }
              index={ index }
            />
          );
        }
        return undefined;
      })
    ) : undefined;
  }

  return (
    <div className="explore-by-area-content">
      <Header pathname={ pathname } />
      { renderAreaCards() }
      { renderRecipes() }
      <Footer />
    </div>
  );
};

ExploreByArea.propTypes = {
  location: PropTypes.shape().isRequired,
  pathname: PropTypes.string,
};

ExploreByArea.defaultProps = {
  pathname: '/area',
};

export default ExploreByArea;

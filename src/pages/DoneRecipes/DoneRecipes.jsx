import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DoneRecipesCard from '../../components/DoneRecipesCard';
import './DoneRecipes.css';
import { useEffect } from 'react';

const DoneRecipes = (props) => {
  const { location } = props;
  const { pathname } = location;

  const test = {
    id: 0,
    type: 'meals',
    area: 'mars',
    category: 'mars food',
    alcoholicOrNot: 'alcoholic',
    name: 'meatballs from mars',
    image: '',
    doneDate: '20/11/2020',
    tags: ['meatballs', 'alcoholic'],
  };
  
  localStorage.setItem('doneRecipes', JSON.stringify([test]));
  // const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  
  function renderDoneRecipes() {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes) {
      return doneRecipes.map((doneRecipe) => (
        <DoneRecipesCard key={ doneRecipe.id } doneRecipe={ doneRecipe } />
        ));
      }
      return <p>no recipes</p>;
    }
    
    return (
    <div className="recipes-done">
      <Header pathname={ pathname } />
      <div className="done-recipes-header">
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
      </div>
      <section className="done-recipes-content">
        {renderDoneRecipes()}
      </section>
      <Footer />
    </div>
  );
};

export default DoneRecipes;

DoneRecipes.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
  doneRecipe: PropTypes.shape(),
};

DoneRecipes.defaultProps = {
  pathname: 'comidas',
};

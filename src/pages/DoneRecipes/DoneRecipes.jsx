import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import DoneRecipesCard from '../../components/DoneRecipesCard';
import './DoneRecipes.css';

const DoneRecipes = (props) => {
  const { location } = props;
  const { pathname } = location;
  const [messageToggle, setMessageToggle] = useState(false);

  // const test = {
  //   id: 0,
  //   type: 'meals',
  //   area: 'mars',
  //   category: 'mars food',
  //   alcoholicOrNot: 'alcoholic',
  //   name: 'meatballs from mars',
  //   image: '',
  //   doneDate: '20/11/2020',
  //   tags: ['meatballs', 'alcoholic'],
  // };

  // localStorage.setItem('doneRecipes', JSON.stringify([test]));
  // const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  const showMessage = () => {
    const TWO_SECONDS = 2000;
    setMessageToggle(true);
    setTimeout(() => {
      setMessageToggle(false);
    }, TWO_SECONDS);
  };

  function renderDoneRecipes() {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes) {
      return doneRecipes.map((doneRecipe, index) => (
        <DoneRecipesCard
          key={ doneRecipe.id }
          doneRecipe={ doneRecipe }
          index={ index }
          showMessage={ showMessage }
        />
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
          Drinks
        </button>
      </div>
      <section className="done-recipes-content">
        {renderDoneRecipes()}
      </section>
      {messageToggle && <p>Link copiado!</p>}
    </div>
  );
};

export default DoneRecipes;

DoneRecipes.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
};

DoneRecipes.defaultProps = {
  pathname: 'comidas',
};

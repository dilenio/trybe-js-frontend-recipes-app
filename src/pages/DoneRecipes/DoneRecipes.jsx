import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import Header from '../../components/Header';
import FavDoneRecipeCard from '../../components/FavDoneRecipeCard';
import DoneRecFavRecFilters
  from '../../components/DoneRecFavRecFilters/DoneRecFavRecFilters';
import './DoneRecipes.css';

const DoneRecipes = (props) => {
  const { location, history } = props;
  const { pathname } = location;
  const [messageToggle, setMessageToggle] = useState(false);
  const { doneFavRecipeFilter } = useContext(Context);

  const showMessage = () => {
    const TWO_SECONDS = 2000;
    setMessageToggle(true);
    setTimeout(() => {
      setMessageToggle(false);
    }, TWO_SECONDS);
  };

  const filterDoneRecipes = (doneRecipes) => {
    switch (doneFavRecipeFilter) {
    case 'meals':
      return doneRecipes.filter((doneRecipe) => !doneRecipe.alcoholicOrNot);
    case 'drinks':
      return doneRecipes.filter((doneRecipe) => doneRecipe.alcoholicOrNot);
    default:
      return doneRecipes;
    }
  };

  function renderDoneRecipes() {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes) {
      return filterDoneRecipes(doneRecipes).map((recipe, index) => (
        <FavDoneRecipeCard
          key={ recipe.id }
          recipe={ recipe }
          index={ index }
          showMessage={ showMessage }
          history={ history }
          cardType="done"
        />
      ));
    }
    return <p>no recipes</p>;
  }

  return (
    <div className="recipes-done">
      <Header pathname={ pathname } />
      <DoneRecFavRecFilters />
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
  history: PropTypes.shape().isRequired,
  pathname: PropTypes.string,
};

DoneRecipes.defaultProps = {
  pathname: 'comidas',
};

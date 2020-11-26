import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import Header from '../../components/Header';
import DoneRecFavRecFilters from '../../components/DoneRecFavRecFilters';
import FavDoneRecipeCard from '../../components/FavDoneRecipeCard/FavDoneRecipeCard';

const FavoriteRecipes = (props) => {
  const { location: { pathname } } = props;
  const { doneFavRecipeFilter } = useContext(Context);
  const [messageToggle, setMessageToggle] = useState(false);

  const showMessage = () => {
    const TWO_SECONDS = 2000;
    setMessageToggle(true);
    setTimeout(() => {
      setMessageToggle(false);
    }, TWO_SECONDS);
  };

  const filterFavoriteRecipes = (doneRecipes) => {
    switch (doneFavRecipeFilter) {
    case 'meals':
      return doneRecipes.filter((doneRecipe) => !doneRecipe.alcoholicOrNot);
    case 'drinks':
      return doneRecipes.filter((doneRecipe) => doneRecipe.alcoholicOrNot);
    default:
      return doneRecipes;
    }
  };

  function renderFavoriteRecipes() {
    const favRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favRecipes) {
      return filterFavoriteRecipes(favRecipes).map((recipe, index) => (
        <FavDoneRecipeCard
          key={ recipe.id }
          recipe={ recipe }
          index={ index }
          showMessage={ showMessage }
          // history={ history }
        />
      ));
    }
    return <p>no recipes</p>;
  }

  return (
    <div>
      <Header pathname={ pathname } />
      <DoneRecFavRecFilters />
      <section className="favorite-recipes-content">
        {renderFavoriteRecipes()}
      </section>
      {messageToggle && <p>Link copiado!</p>}
    </div>
  );
};

FavoriteRecipes.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  // history: PropTypes.shape().isRequired,
  pathname: PropTypes.string,
};

FavoriteRecipes.defaultProps = {
  pathname: 'comidas',
};

export default FavoriteRecipes;

import React, { useContext } from 'react';
import Context from '../../context/Context';
import './DoneRecFavRecFilters.css';

const DoneRecFavRecFilters = () => {
  const { setDoneFavRecipeFilter } = useContext(Context);
  return (
    <div className="recipes-header">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setDoneFavRecipeFilter('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setDoneFavRecipeFilter('meals') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setDoneFavRecipeFilter('drinks') }
      >
        Drinks
      </button>
    </div>
  );
};

export default DoneRecFavRecFilters;

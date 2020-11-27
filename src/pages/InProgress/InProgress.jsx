import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import './InProgress.css';

const InProgress = () => {
  const { inProgressId } = useContext(Context);
  const [data, setData] = useState([]);

  const recipeId = inProgressId.id;
  const recipeType = inProgressId.type;

  useEffect(() => {
    if (recipeType === 'comidas' && recipeId !== '') {
      getMealsAPI(recipeId, 'details').then((response) => {
        setData(response[0]);
      });
    } else if (recipeType === 'bebidas' && recipeId !== '') {
      getDrinksApi(recipeId, 'details').then((response) => {
        setData(response[0]);
      });
    } else {
      console.warn('fetch error');
      return undefined;
    }
  }, []);

  return (
    <div className="recipe-wrapper">
      { console.log(data) }
      <nav className="social">
        <button type="button" data-testid="favorite-btn">Favorite</button>
        <button type="button" data-testid="share-btn">Share</button>
      </nav>
      <div className="recipe-info">
        <img
          className="recipe-thumb"
          data-testid="recipe-photo"
          src={ data.strMealThumb || data.strDrinkThumb }
          alt={ data.strMeal || data.strDrink }
        />
        <p
          className="recipe-title"
          data-testid="recipe-title"
        >
          { data.strMeal || data.strDrink }
        </p>
        <p
          className="recipe-category"
          data-testid="recipe-category"
        >
          { data.strCategory }
        </p>
      </div>
      <div className="recipe-steps">
        <div className="recipe-ingredients">
          Ingredients
        </div>
        <p
          className="recipe-instructions"
          data-testid="instructions"
        >
          { data.strInstructions }
        </p>
      </div>
    </div>
  );
};

export default InProgress;

import React, { useEffect, useState } from 'react';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import './InProgress.css';

const InProgress = () => {
  const [data, setData] = useState([]);

  const path = window.location.pathname.split('/');
  const recipeId = path[2];
  const recipeType = path[1];

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
      return undefined;
    }
  }, []);

  function buildTable() {
    return Object.keys(data)
      .filter((keys) => keys.includes('Ingredient'))
      .map((ingredient, index) => {
        if (data[ingredient] !== '' && data[ingredient] !== null) {
          const measure = Object.keys(data)
            .filter((keys) => keys.includes('Measure'));
          const measureIndex = measure[index];
          return (
            <li
              data-testid={ `${index}ingredient-step` }
              htmlFor={ index }
            >
              { `${data[ingredient]} - ${data[measureIndex]} `}
              <input
                type="checkbox"
                name={ index }
              />
            </li>
          );
        }
        return '';
      });
  }

  return (
    <div className="recipe-wrapper">
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
          {data.strMeal || data.strDrink}
        </p>
        <p
          className="recipe-category"
          data-testid="recipe-category"
        >
          {data.strCategory}
        </p>
      </div>
      <div className="recipe-steps">
        <div className="recipe-ingredients">
          Ingredients
          <ul>
            { buildTable() }
          </ul>
        </div>
        <p
          className="recipe-instructions"
          data-testid="instructions"
        >
          {data.strInstructions}
        </p>
        <button type="button" data-testid="finish-recipe-btn">
          Finish recipe
        </button>
      </div>
    </div>
  );
};

export default InProgress;

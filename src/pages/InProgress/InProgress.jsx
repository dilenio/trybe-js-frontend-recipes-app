import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import './InProgress.css';

const InProgress = () => {
  const [data, setData] = useState([]);
  const [cheks, setChecks] = useState([]);

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

  function ingredientsAmount() {
    const amountArray = [];
    Object.keys(data)
      .filter((key) => key.includes('Ingredient'))
      .map((ingredient) => {
        if (data[ingredient] !== '' && data[ingredient] !== null) {
          amountArray.push(data[ingredient]);
        }
        return undefined;
      });
    return amountArray.length;
  }

  function enableFinish() {
    let verify = true;
    if (cheks === ingredientsAmount()) {
      verify = false;
      return verify;
    }
    return verify;
  }

  function handleCheck(event) {
    const { target } = event;
    const getChecks = document.querySelectorAll('.checked').length;
    setChecks(getChecks);
    console.log(cheks, target);
  }

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
              key={ index }
            >
              { `${data[ingredient]} - ${data[measureIndex]} `}
              <input
                type="checkbox"
                name={ index }
                value={ ingredient }
                onChange={ (event) => handleCheck(event) }
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
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ () => ingredientsAmount() }
            disabled={ enableFinish() }
          >
            Finish recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InProgress;

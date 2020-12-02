import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import './InProgress.css';

const InProgress = () => {
  const [data, setData] = useState([]);
  const [cheks, setChecks] = useState('0');
  const [toggleCheck, setToggleCheck] = useState(false);

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
  }, [recipeId, recipeType]);

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
    return amountArray;
  }

  function enableFinish() {
    let verify = true;
    if (cheks === ingredientsAmount().length) {
      verify = false;
      return verify;
    }
    return verify;
  }

  const saveInProgress = (ingredient) => {
    const oldProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const thisId = data.idMeal || data.idDrink;
    const emptyProgress = {
      cocktails: {
        [thisId]: [],
      },
      meals: {
        [thisId]: [],
      },
    };

    if (data.idMeal && oldProgress) {
      const mealItems = (oldProgress.meals[thisId]) ? oldProgress.meals[thisId] : [];
      const mealProgress = {
        ...emptyProgress,
        meals: {
          [thisId]: [...mealItems, ingredient],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(mealProgress));
    }

    if (data.idDrink && oldProgress) {
      const drinkItems = (oldProgress.cocktails[thisId]) ? oldProgress.cocktails[thisId] : [];
      const mealProgress = {
        ...emptyProgress,
        cocktails: {
          [thisId]: [...drinkItems, ingredient],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(mealProgress));
    }
  };

  function handleCheck(event, ingredient) {
    const { target } = event;
    target.classList.toggle('checked');
    setToggleCheck(!toggleCheck);
    if (target.className === 'checked') {
      saveInProgress(ingredient);
    };
  }

  function checkIfChecked(ingredient) {
    const oldProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const thisId = data.idMeal || data.idDrink;
    const emptyProgress = {
      cocktails: {
        [thisId]: [],
      },
      meals: {
        [thisId]: [],
      },
    };

    if (!oldProgress) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(emptyProgress));
    }

    const checkedIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const type = (recipeType === 'comidas') ? 'meals' : 'cocktails';
    if (checkedIngredients && checkedIngredients[type][recipeId]) {
      const test = (checkedIngredients[type][recipeId].includes(ingredient)) ? true : false;
      return test;
    }
    return false;
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
              data-testid={ `${index}-ingredient-step` }
              htmlFor={ index }
              key={ index }
            >
              { `${data[ingredient]} - ${data[measureIndex]} `}
              <input
                type="checkbox"
                name={ index }
                value={ ingredient }
                checked={ checkIfChecked(data[ingredient]) }
                onChange={ (e) => handleCheck(e, data[ingredient]) }
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

import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import RecipeCard from '../RecipeCard';
import './Recipes.css';

const Recipes = () => {
  const {
    pageTitle,
    recipes,
    setRecipes,
    setLoading,
    setRecipesType,
  } = useContext(Context);

  useEffect(() => {
    if (pageTitle === 'Comidas') {
      setLoading(true);
      getMealsAPI().then((data) => {
        setRecipes(data);
        setLoading(false);
        setRecipesType('meals');
      });
    } else if (pageTitle === 'Bebidas') {
      setLoading(true);
      getDrinksApi().then((data) => {
        setRecipes(data);
        setLoading(false);
        setRecipesType('drinks');
      });
    }
  }, [pageTitle]);

  return (
    <div className="recipes-container">
      {recipes && recipes.map((recipe, index) => {
        const MAX_CARDS = 11;
        while (index <= MAX_CARDS) {
          return (
            <RecipeCard
              key={ recipe.idMeal || recipe.idDrink }
              recipe={ recipe }
              index={ index }
            />
          );
        }
        return undefined;
      })}
    </div>
  );
};

export default Recipes;

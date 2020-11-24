import React, { useContext, useEffect } from 'react';
import Context from '../../context/Context';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import RecipeCard from '../RecipeCard';
import './Recipes.css';

const Recipes = () => {
  const {
    pageTitle,
    recipes,
    setRecipes,
    setLoading,
    selectedCategory,
  } = useContext(Context);

  useEffect(() => {
    if (pageTitle === 'Comidas') {
      setLoading(true);
      getMealsAPI().then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    } else if (pageTitle === 'Bebidas') {
      setLoading(true);
      getDrinksApi().then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    }
  }, [pageTitle]);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory !== '' && pageTitle === 'Comidas') {
      console.log('if de comidas');
      setLoading(true);
      getMealsAPI(`c=${selectedCategory}`, 'byCategory').then((data) => {
        setRecipes(data);
        setLoading(false);
        console.log('comidas');
      });
    } else if (selectedCategory !== '' && pageTitle === 'Bebidas') {
      console.log('if de bebidas');
      setLoading(true);
      getDrinksApi(`c=${selectedCategory}`, 'byCategory').then((data) => {
        setRecipes(data);
        setLoading(false);
        console.log('bebidas');
        console.log(data);
      });
    }
  }, [selectedCategory]);

  return (
    <div className="wrapper">
      <CategoryDisplay />
      <div className="recipes-container">
        {recipes && recipes.map((recipe, index) => {
          const MAX_CARDS = 11;
          const TWELVE = 12;
          if (selectedCategory === '') {
            while (index <= MAX_CARDS) {
              return (
                <RecipeCard
                  key={ recipe.idMeal || recipe.idDrink }
                  recipe={ recipe }
                  index={ index }
                />
              );
            }
          }
          if (recipe.strCategory === selectedCategory) {
            while (index <= TWELVE) {
              return (
                <RecipeCard
                  key={ recipe.idMeal || recipe.idDrink }
                  recipe={ recipe }
                  index={ index }
                />
              );
            }
          }
          return undefined;
        })}
      </div>
    </div>
  );
};

export default Recipes;

const INGREDIENT_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const NAME_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRSTLETTER_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const INGREDIENT_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const NAME_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FIRSTLETTER_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export const getMealsAPI = async (searchText, searchType) => {
  if (searchType === 'ingredient') {
    const data = await (await fetch(`${INGREDIENT_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
  if (searchType === 'name') {
    const data = await (await fetch(`${NAME_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
  if (searchType === 'firstletter') {
    const data = await (await fetch(`${FIRSTLETTER_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
};

export const getDrinksApi = async (searchText, searchType) => {
  if (searchType === 'ingredient') {
    const data = await (await fetch(`${INGREDIENT_DRINK_API}${searchText}`)).json();
    return data.drinks;
  }
  if (searchType === 'name') {
    const data = await (await fetch(`${NAME_DRINK_API}${searchText}`)).json();
    return data.drinks;
  }
  if (searchType === 'firstletter') {
    const data = await (await fetch(`${FIRSTLETTER_DRINK_API}${searchText}`)).json();
    return data.drinks;
  }
};

export default { getMealsAPI, getDrinksApi };

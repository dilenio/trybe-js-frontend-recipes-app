const INGREDIENT_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const NAME_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRSTLETTER_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const INGREDIENT_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const NAME_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FIRSTLETTER_DRINK_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

const fetchData = async (url, endpoint, type) => {
  const data = await (await fetch(`${url}${endpoint}`)).json();
  return data[type];
};

export const getMealsAPI = async (searchText, searchType) => {
  if (searchType === 'ingredient') {
    return fetchData(INGREDIENT_MEAL_API, searchText, 'meals');
  }
  if (searchType === 'name') {
    return fetchData(NAME_MEAL_API, searchText, 'meals');
  }
  if (searchType === 'firstletter') {
    return fetchData(FIRSTLETTER_MEAL_API, searchText, 'meals');
  }
};

export const getDrinksApi = async (searchText, searchType) => {
  if (searchType === 'ingredient') {
    return fetchData(INGREDIENT_DRINK_API, searchText, 'drinks');
  }
  if (searchType === 'name') {
    return fetchData(NAME_DRINK_API, searchText, 'drinks');
  }
  if (searchType === 'firstletter') {
    return fetchData(FIRSTLETTER_DRINK_API, searchText, 'drinks');
  }
};

export default { getMealsAPI, getDrinksApi };

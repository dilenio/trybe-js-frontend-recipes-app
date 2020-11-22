const NAME_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const INGREDIENT_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const FIRSTLETTER_MEAL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const getMealsAPI = async (searchText, searchType) => {
  if (searchType === 'name') {
    const data = await (await fetch(`${NAME_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
  if (searchType === 'ingredient') {
    const data = await (await fetch(`${INGREDIENT_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
  if (searchType === 'firstletter') {
    const data = await (await fetch(`${FIRSTLETTER_MEAL_API}${searchText}`)).json();
    return data.meals;
  }
};

export default getMealsAPI;

import React, { useContext } from 'react';
import Context from '../context/Context';

const NAME_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const INGREDIENT_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FIRSTLETTER_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const { search } = useContext(Context);

// A 'search' é um objeto com duas chaves: text e type.
// 'type' pode ter os valores: 'name', 'ingredient' ou 'firstletter'

export const getFoodsAPI = async () => {
  if (search.type === 'name') {
    const data = await (await fetch(`${NAME_FOOD_API}{${search.type}}`)).json();
    return data.results;
  }
  if (search.type === 'ingredient') {
    const data = await (await fetch(`${INGREDIENT_FOOD_API}{${search.type}}`)).json();
    return data.results;
  }
  if (search.type === 'firstletter') {
    const data = await (await fetch(`${FIRSTLETTER_FOOD_API}{${search.type}}`)).json();
    return data.results;
  }
};

export default getFoodsAPI;

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
    <div className="in-progress-wrapper">
      In progress recipe
      { recipeId || 'not fetch' }
      { recipeType || 'not fetch' }
      { data.strMeal }
    </div>
  );
};

export default InProgress;

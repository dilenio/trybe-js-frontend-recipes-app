import React from 'react';
import { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { getMealsAPI, getDrinksApi } from '../../services/API';

const Recipes = () => {
  const { pageTitle, setSearch, setRecipes, setLoading } = useContext(Context);
  useEffect(() => {
    if (pageTitle === 'Comidas') {
      setLoading(true);
      getMealsAPI().then((data) => {
        setRecipes({
          ...data,
        });
        setLoading(false);
      });
    } else {
      setLoading(true);
      getDrinksApi().then((data) => {
        setRecipes({
          ...data,
        });
        setLoading(false);
      });
    }
  }, [pageTitle]);

  return (
    <p>recipes</p>
  );
}

export default Recipes;

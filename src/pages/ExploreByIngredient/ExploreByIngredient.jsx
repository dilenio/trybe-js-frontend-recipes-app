import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import Context from '../../context/Context';
import IngredientCard from '../../components/IngredientCard';
import './ExploreByIngredient.css';

const ExploreByIngredient = (props) => {
  const { location: { pathname } } = props;
  const {
    setLoading,
    ingredients,
    setIngredients,
  } = useContext(Context);

  useEffect(() => {
    if (pathname === '/explorar/comidas/ingredientes') {
      setLoading(true);
      getMealsAPI('', 'list-all-ingredients').then((data) => {
        setIngredients(data);
        setLoading(false);
      });
    }
    if (pathname === '/explorar/bebidas/ingredientes') {
      setLoading(true);
      getDrinksApi('', 'list-all-ingredients').then((data) => {
        setIngredients(data);
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className="ingredient-container">
      { ingredients && ingredients.map((ingredient, index) => {
        const maxCards = 12;
        while (index < maxCards) {
          return (
            <IngredientCard
              key={ index }
              ingredient={ ingredient }
              index={ index }
            />
          );
        }
        return undefined;
      })}
    </div>
  );
};

ExploreByIngredient.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ExploreByIngredient;

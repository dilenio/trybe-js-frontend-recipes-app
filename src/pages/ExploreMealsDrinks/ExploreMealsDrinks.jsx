import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getMealsAPI, getDrinksApi } from '../../services/API';

const ExploreMealsDrinks = (props) => {
  const { location: { pathname } } = props;
  const {
    pageTitle,
    recipes,
    setRecipes,
    setLoading,
  } = useContext(Context);
  const [randomId, setRandomId] = useState('');
  const zero = 0;

  useEffect(() => {
    if (pageTitle === 'Explorar Comidas') {
      setLoading(true);
      getMealsAPI('', 'random').then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    }
    if (pageTitle === 'Explorar Bebidas') {
      setLoading(true);
      getDrinksApi('', 'random').then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    }
  }, [pageTitle, setLoading, setRecipes]);

  useEffect(() => {
    if (recipes.length > zero && pageTitle === 'Explorar Comidas') {
      setRandomId(`/comidas/${recipes[zero].idMeal}`);
    }
    if (recipes.length > zero && pageTitle === 'Explorar Bebidas') {
      setRandomId(`/bebidas/${recipes[zero].idDrink}`);
    }
  }, [recipes, pageTitle]);

  return (
    <div className="explore-container">
      <Header pathname={ pathname } />
      <div className="explore-buttons">
        <Link
          to={ `${pathname}/ingredientes` }
          data-testid="explore-by-ingredient"
        >
          <button
            className="btn btn-explore btn-active"
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        { pageTitle === 'Explorar Comidas' && (
          <Link
            to={ `${pathname}/area` }
            data-testid="explore-by-area"
          >
            <button
              className="btn btn-explore btn-active"
              type="button"
            >
              Por Local de Origem
            </button>
          </Link>
        )}
        <Link
          to={ `${randomId}` }
          data-testid="explore-surprise"
        >
          <button
            className="btn btn-explore btn-active"
            type="button"
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <div className="container-footer">
        {pathname && pathname !== '/receitas-favoritas'
        && <Footer pathname={ pathname } />}
      </div>
    </div>
  );
};

ExploreMealsDrinks.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
};

ExploreMealsDrinks.defaultProps = {
  pathname: '/comidas',
};

export default ExploreMealsDrinks;

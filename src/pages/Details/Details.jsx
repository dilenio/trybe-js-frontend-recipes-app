import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { foodDetails, drinkDetails, getDrinksApi, getMealsAPI } from '../../services/API';
import Context from '../../context/Context';
import RecipeCard from '../../components/RecipeCard';
import './Details.css';

const Details = (props) => {
  const { details, setdetails } = useContext(Context);
  const { recomendations, setRecomendations } = useContext(Context);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const idDetails = id;
  const { path } = match;
  const pop = path;
  const cinco = 5;
  const {
    strAlcoholic,
    strCategory,
    strYoutubes
  } = details
  const RandomDetails = () => {
    if (pop === '/comidas/:id') {
      foodDetails(idDetails).then((data) => {
        setdetails(data[0]);
      });
      getMealsAPI().then((index) => {
        setRecomendations(index);
      });
    } else {
      drinkDetails(idDetails).then((data) => {
        setdetails(data[0]);
      });
      getDrinksApi().then((index) => {
        setRecomendations(index[0]);
      });
    }
  };

  useEffect(() => {
    RandomDetails();
  }, []);
  // const aux = details.strYoutube.replace('watch?v=', 'embed/') ;
  // console.log(aux);
  return (
    <div>
      <img
        src={details.strDrinkThumb || details.strMealThumb}
        data-testid="recipe-photo"
        alt={details.strMeal || details.strDrink}
      />

      <h1
        data-testid="recipe-title"
      >
        {details.strDrink || details.strMeal}
      </h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        share
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
      >
        favorite
      </button>

      <div>
        <text
          data-testid="recipe-category"
        >
          {strAlcoholic}
          {strCategory}
        </text>
      </div>

      <h2>Ingredientes:</h2>
      <ul>
        {
          Object.keys(details)
            .filter((keys) => keys.includes('Ingredient'))
            .map((ingredient, index) => {
              if (details[ingredient] !== '' && details[ingredient] !== null) {
                const measure = Object.keys(details)
                  .filter((keys) => keys.includes('Measure'));
                const measureIndex = measure[index];
                return (
                  <li
                    key={index}
                    data-testid={`${index}-ingredient-name-and-measure`}
                  >
                    { `${details[ingredient]} - ${details[measureIndex]} `}
                  </li>
                );
              }
              return '';
            })
        }
      </ul>

      <div>
        <text
          data-testid="instructions"
        >
          {details.strInstructions}
        </text>
        {/* {className={"wall wall-"`${i}`} id={"wall-"`${i}`}} */}
      </div>
      <div data-testid="video">
        <iframe width="560" height="315" title="frame" src={strYoutubes} frameborder="0" ></iframe>
      </div>
      <div className="recomendation-container">
        {recomendations
          .filter((_, index) => index <= 12)
          .map((recipe, i) => (
            <div className="recomendation-card"
            key={i} data-testid={`${i}-recomendation-card`}>
              <RecipeCard key={ recipe.idMeal || recipe.idDrink }
                  recipe={ recipe }
                  index={ i } />
            </div>
          ))}
      </div>

      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        start recipe
      </button>
    </div>
  );
};
Details.propTypes = {
  // props: PropTypes.shape().isRequired,
  id: PropTypes.shape().isRequired,
  path: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
};

export default Details;

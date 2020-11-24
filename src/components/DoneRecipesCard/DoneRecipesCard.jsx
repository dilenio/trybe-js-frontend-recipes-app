import React from 'react';
import PropTypes from 'prop-types';
import shareBtn from '../../images/shareIcon.svg';
import './DoneRecipesCard.css';

const DoneRecipesCard = (props) => {
  const { doneRecipe, index } = props;
  const {
    id,
    // type,
    area,
    category,
    // alcoholicOrNot,
    name,
    image,
    doneDate,
    tags } = doneRecipe;
  return (
    <div className="done-recipe-card">
      <div className="img-container">
        <img
          src={ image }
          // src="http://www.animationinsider.com/wp-content/uploads/2012/08/yoda.jpg"
          data-testid={ `${index}-horizontal-image` }
          alt="recipe"
        />
      </div>
      <div className="done-recipe-card-content">
        <img
          src={ shareBtn }
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share"
        />
        <h3 data-testid={ `${index}-horizontal-top-text` }>
          { `${area} - ${category}` }
        </h3>
        <h4 data-testid={ `${index}-horizontal-name` }>{name}</h4>
        <p data-testid={ `${index}-horizontal-done-date` }>
          { `Feita em: ${doneDate}` }
        </p>
        <section className="tag-container">
          {tags.map((tag) => (
            <p
              className="tag"
              data-testid={ `${index}-${tag}-horizontal-tag` }
              key={ `${id}-${tag}` }
            >
              {tag}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DoneRecipesCard;

DoneRecipesCard.propTypes = {
  doneRecipe: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};

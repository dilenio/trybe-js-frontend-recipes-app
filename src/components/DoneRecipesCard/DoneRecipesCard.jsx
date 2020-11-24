import React from 'react';
import PropTypes from 'prop-types';

const DoneRecipesCard = ({ doneRecipe }) => {
  const {
    id,
    type,
    area,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags } = doneRecipe;
  return (
    <div className="done-recipe-card">
      <p>recipe card</p>
      <p>{id}</p>
    </div>
  );
};

export default DoneRecipesCard;

DoneRecipesCard.propTypes = {
  doneRecipe: PropTypes.shape().isRequired,
};

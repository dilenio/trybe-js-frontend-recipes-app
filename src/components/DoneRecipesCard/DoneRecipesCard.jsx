import React from 'react';
import PropTypes from 'prop-types';
import shareBtn from '../../images/shareIcon.svg';
import './DoneRecipesCard.css';

const DoneRecipesCard = (props) => {
  const { doneRecipe, index, showMessage, history } = props;
  const {
    id,
    // type,
    area,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags } = doneRecipe;

  function renderHorizontalTopText() {
    return alcoholicOrNot ? (
      <h4 data-testid={ `${index}-horizontal-top-text` }>
        { alcoholicOrNot }
      </h4>
    ) : (
      <h4 data-testid={ `${index}-horizontal-top-text` }>
        { `${area} - ${category}` }
      </h4>
    );
  }

  const getDetailsPath = () => (
    (!alcoholicOrNot) ? `comidas/${id}` : `bebidas/${id}`
  );

  const copyUrlToClipboard = () => {
    const detailsPage = window.location.href.replace('receitas-feitas', () => (
      (!alcoholicOrNot) ? `comidas/${id}` : `bebidas/${id}`
    ));
    // learned from here: https://medium.com/dev-genius/react-tips-copy-to-clipboard-comparing-old-and-new-values-with-hooks-a5f22a258a09
    navigator.clipboard.writeText(detailsPage).then(() => showMessage());
  };

  return (
    <div className="done-recipe-card">
      <button
        type="button"
        onClick={ () => history.push(getDetailsPath()) }
      >
        <div className="img-container">
          <img
            src={ image }
            data-testid={ `${index}-horizontal-image` }
            alt="recipe"
          />
        </div>
      </button>
      <div className="done-recipe-card-content">
        <button
          type="button"
          className="share-btn"
          onClick={ () => copyUrlToClipboard() }
        >
          <img
            src={ shareBtn }
            data-testid={ `${index}-horizontal-share-btn` }
            alt="share"
          />
        </button>
        { renderHorizontalTopText() }
        <button
          className="name-button"
          type="button"
          onClick={ () => history.push(getDetailsPath()) }
        >
          <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
        </button>
        <p
          className="recipe-done"
          data-testid={ `${index}-horizontal-done-date` }
        >
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
  showMessage: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

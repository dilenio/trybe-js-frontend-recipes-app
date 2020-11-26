import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import shareBtn from '../../images/shareIcon.svg';
import favBtn from '../../images/blackHeartIcon.svg';
import './FavDoneRecipeCard.css';

const FavDoneRecipeCard = (props) => {
  const { cardType } = useContext(Context);
  const { recipe, index, showMessage, history } = props;
  const {
    id,
    // type,
    area,
    category,
    alcoholicOrNot,
    name,
    image,
    doneDate,
    tags } = recipe;

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

  const getType = () => {
    switch (cardType) {
    case 'done':
      return 'receitas-feitas';
    default:
      return 'receitas-favoritas';
    }
  };

  const copyUrlToClipboard = () => {
    const detailsPage = window.location.href.replace(getType(), () => (
      (!alcoholicOrNot) ? `comidas/${id}` : `bebidas/${id}`
    ));
    navigator.clipboard.writeText(detailsPage).then(() => showMessage());
  };

  const getDetailsPath = () => (
    (!alcoholicOrNot) ? `comidas/${id}` : `bebidas/${id}`
  );

  return (
    <div className="recipe-card">
      {(cardType === 'favorite') ? (
        <button
          type="button"
          // onClick= {}
        >
          <img
            src={ favBtn }
            data-testid={ `${index}-horizontal-favorite-btn` }
            alt="recipe"
          />
        </button>
      ) : undefined}
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
      <div className="recipe-card-content">
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
        {(doneDate) ? (
          <p
            className="recipe-done"
            data-testid={ `${index}-horizontal-done-date` }
          >
            { `Feita em: ${doneDate}` }
          </p>

        ) : undefined}
        <section className="tag-container">
          {(tags) ? tags.map((tag) => (
            <p
              className="tag"
              data-testid={ `${index}-${tag}-horizontal-tag` }
              key={ `${id}-${tag}` }
            >
              {tag}
            </p>
          )) : undefined}
        </section>
      </div>
    </div>
  );
};

FavDoneRecipeCard.propTypes = {
  recipe: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  showMessage: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default FavDoneRecipeCard;

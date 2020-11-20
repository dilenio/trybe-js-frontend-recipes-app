import React from 'react';

function SearchBar() {
  return (
    <div>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="searchtype"
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="name"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="firstletter">
        <input
          type="radio"
          id="firstletter"
          name="searchtype"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
    </div>
  );
}

export default SearchBar;

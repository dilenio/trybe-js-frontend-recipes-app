import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import getMealsAPI from '../../services/API';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('name');
  const { setSearch, setMeals, setLoading } = useContext(Context);

  const handleSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSearchType = (value) => {
    setSearchType(value);
  };

  const handleSearch = () => {
    if (searchType === 'firstletter' && searchText.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    setSearch({
      searchText,
      searchType,
    });
    setLoading(true);
    getMealsAPI(searchText, searchType).then((data) => setMeals(data));
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        value={ searchText }
        onChange={ handleSearchText }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="search"
          data-testid="ingredient-search-radio"
          checked={ searchType === 'ingredient' }
          value="ingredient"
          onChange={ () => handleSearchType('ingredient') }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="search"
          checked={ searchType === 'name' }
          value="name"
          data-testid="name-search-radio"
          onChange={ () => handleSearchType('name') }
        />
        Nome
      </label>
      <label htmlFor="firstletter">
        <input
          type="radio"
          id="firstletter"
          name="search"
          checked={ searchType === 'firstletter' }
          value="firstletter"
          data-testid="first-letter-search-radio"
          onChange={ () => handleSearchType('firstletter') }
        />
        Primeira letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;

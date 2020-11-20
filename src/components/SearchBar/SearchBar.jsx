import React, { useState, useContext } from 'react';
import Context from '../../context/Context';

function SearchBar() {
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('name');
  const { setSearch } = useContext(Context);

  const handleSearchName = ({ target }) => {
    setSearchName(target.value);
  };

  const handleSearchType = (value) => {
    setSearchType(value); 
  };

  const handleSearch = () => {
    if (searchType === 'firstletter' && searchName.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
    setSearch({
      name: searchName,
      type: searchType,
    })
  };

  return (
    <div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        value={ searchName }
        onChange={ handleSearchName }
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
    </div>
  );
}

export default SearchBar;

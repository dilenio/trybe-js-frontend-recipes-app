import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState({
    searchText: '',
    searchType: '',
  });
  const [pageTitle, setPageTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [doneFavRecipeFilter, setDoneFavRecipeFilter] = useState('all');

  const context = {
    email,
    setemail,
    password,
    setPassword,
    search,
    setSearch,
    recipes,
    setRecipes,
    loading,
    setLoading,
    pageTitle,
    setPageTitle,
    ingredients,
    setIngredients,
    selectedCategory,
    setSelectedCategory,
    doneFavRecipeFilter,
    setDoneFavRecipeFilter,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;

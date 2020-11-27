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
  const [details, setdetails] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [doneFavRecipeFilter, setDoneFavRecipeFilter] = useState('all');
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const [cardType, setCardType] = useState('');

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
    setdetails,
    details,
    recomendations,
    setRecomendations,
    ingredients,
    setIngredients,
    selectedCategory,
    setSelectedCategory,
    doneFavRecipeFilter,
    setDoneFavRecipeFilter,
    cardType,
    setCardType,
    doneRecipes,
    setDoneRecipes,
    favRecipes,
    setFavRecipes,
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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setemail] = useState('');
  const [passWord, setpassWord] = useState('');
  const [search, setSearch] = useState({
    searchText: '',
    searchType: '',
  });
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState({});
  const [drinks, setDrinks] = useState({});

  const context = {
    email,
    setemail,
    passWord,
    setpassWord,
    search,
    setSearch,
    meals,
    setMeals,
    drinks,
    setDrinks,
    loading,
    setLoading,
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

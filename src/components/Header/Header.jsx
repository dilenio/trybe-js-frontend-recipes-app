import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import './Header.css';

const Header = (props) => {
  const { pathname } = props;
  const [pageTitle, setPageTitle] = useState('');
  const [searchBar, setSearchBar] = useState(false);
  const [searchButton, setSearchButton] = useState(false);

  useEffect(() => {
    if (pathname.match('comidas')) setPageTitle('Comidas');
    if (pathname.match('bebidas')) setPageTitle('Bebidas');
    if (pathname.match('perfil')) setPageTitle('Perfil');
    if (pathname.match('explorar')) setPageTitle('Explorar');
    if (pathname.match('explorar')) setPageTitle('Explorar');
    if (pathname.match('explorar/comidas')) setPageTitle('Explorar Comidas');
    if (pathname.match('explorar/bebidas')) setPageTitle('Explorar Bebidas');
    if (pathname.match('ingredientes')) setPageTitle('Explorar Ingredientes');
    if (pathname.match('area')) setPageTitle('Explorar Origem');
    if (pathname.match('receitas-feitas')) setPageTitle('Receitas Feitas');
    if (pathname.match('receitas-favoritas')) setPageTitle('Receitas Favoritas');
  }, []);

  useEffect(() => {
    if (pathname.match('comidas')) setSearchButton(true);
    if (pathname.match('bebidas')) setSearchButton(true);
    if (pathname.match('perfil')) setSearchButton(false);
    if (pathname.match('explorar')) setSearchButton(false);
    if (pathname.match('ingredientes')) setSearchButton(false);
    if (pathname.match('receitas')) setSearchButton(false);
    if (pathname.match('area')) setSearchButton(true);
  }, [pageTitle]);

  return (
    <div>
      <div className="header">
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={profileIcon}
            alt="profile"
          />
        </Link>
        <h3 data-testid="page-title">{pageTitle}</h3>
        {searchButton && (
          <button
            type="button"
            onClick={() => setSearchBar(!searchBar)}
          >
            <img
              data-testid="search-top-btn"
              src={searchIcon}
              alt="search"
            />
          </button>
        )}
      </div>
      <div className="searchbar">
        {searchBar && <p data-testid="search-input">busca</p>}
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};
